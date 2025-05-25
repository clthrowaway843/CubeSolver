/**
* Rotate the facelets string so yellow is U, green is F, orange is R, etc.
*/
function reorientFaceletsYellowTopGreenFront(facelets: string): string {
    if (facelets.length !== 54) throw new Error("Facelets string must be 54 characters long");

    const mapping = [
        // U (yellow, was D)
        35, 34, 33, 32, 31, 30, 29, 28, 27,

        // R (orange, was L)
        44, 43, 42, 41, 40, 39, 38, 37, 36,

        // F (green, stays F)
        26, 25, 24, 23, 22, 21, 20, 19, 18,

        // D (white, was U)
        8, 7, 6, 5, 4, 3, 2, 1, 0,

        // L (red, was R)
        17, 16, 15, 14, 13, 12, 11, 10, 9,

        // B (blue, stays B)
        53, 52, 51, 50, 49, 48, 47, 46, 45
    ];

    let newFacelets = '';

    for (let i = 0; i < 54; i++)
        newFacelets += facelets[mapping[i]];

    return newFacelets;
}

/**
* Extract the 21 stickers relevant for OLL mask comparison, in the mask's order,
* from the facelets string in yellow-on-top, green-front orientation.
* Rotates the U layer by uRot * 90� clockwise.
* Returns a string of 21 characters (color letters).
*/
function extractOLL21(facelets: string): string {
    // Indexes for mask positions in the reoriented facelets string:
    const uRotMaps = [
        {
            u: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            r: [9, 10, 11],
            f: [18, 19, 20],
            l: [36, 37, 38],
            b: [45, 46, 47],

        },
    ];

    const m = uRotMaps[0];
    return [
        ...m.u.map(i => facelets[i]),
        ...m.r.map(i => facelets[i]),
        ...m.f.map(i => facelets[i]),
        ...m.l.map(i => facelets[i]),
        ...m.b.map(i => facelets[i]),
    ].join('');
}

/**
 * Converts a facelets string to a binary string where '1' represents 'D' and '0' represents non-'D'.
 * @param facelets The facelets string in Kociemba notation (e.g., "FLLBDDBDDDDRFFFDFRBBB").
 * @returns A binary string (e.g., "000110111000000000000").
 */
function convertFaceletsToBinary(facelets: string): string {
    return facelets
        .split("") // Split the string into individual characters
        .map(char => (char === "D" ? "1" : "0")) // Replace 'D' with '1' and others with '0'
        .join(""); // Join the characters back into a single string
}

/**
 * Determine which OLL mask the top layer matches, if any.
 * Returns the index of the matching mask, or -1 if no match is found.
 */
export function findMatchingOLLMask(facelets: string): { index: number; rotation: number } | null {
    const reoriented = reorientFaceletsYellowTopGreenFront(facelets);

    for (let uRot = 0; uRot < 4; uRot++) {
        const layer = convertFaceletsToBinary(extractOLL21(reoriented));
        if (layer in OLL_MASKS_MAP) {
            return OLL_MASKS_MAP[layer]; // Return the index and rotation
        }
    }

    return null; // No match found
}

function prependRotationMoves(algorithm: string, rotation: number): string {
    let rotationMoves = "";
    if (rotation === 1) {
        rotationMoves = "U' ";
    } else if (rotation === 2) {
        rotationMoves = "U2 ";
    } else if (rotation === 3) {
        rotationMoves = "U ";
    }
    return rotationMoves + algorithm;
}

/**
 * Rotate a 21-character mask by 90� clockwise.
 * Mask convention:
 * - Indexes 0-8: U face
 * - Indexes 9-11: R face top row
 * - Indexes 12-14: F face top row
 * - Indexes 15-17: L face top row
 * - Indexes 18-20: B face top row
 */
function rotateMask(mask: string): string {
    const u = mask.slice(0, 9); // U face
    const r = mask.slice(9, 12); // R face
    const f = mask.slice(12, 15); // F face
    const l = mask.slice(15, 18); // L face
    const b = mask.slice(18, 21); // B face

    // Rotate U face clockwise
    const rotatedU = [
        u[6], u[3], u[0],
        u[7], u[4], u[1],
        u[8], u[5], u[2],
    ].join('');

    // Rotate side faces accordingly
    const rotatedR = b; // F becomes R
    const rotatedF = r; // L becomes F
    const rotatedL = f; // B becomes L
    const rotatedB = l; // R becomes B

    return rotatedU + rotatedR + rotatedF + rotatedL + rotatedB;
}

// Precompute OLL masks as a hash map
const OLL_MASKS: string[] = [
    "000010000111010111010", //(dot only with bars on sides)                                 1
    "000010000010011111110", //(dot only with 1 bar on left)                                 2
    "000010001011010011011", //(dot with bottom right corner, single yellow on front)        3
    "001010000110110110010", //(dot with top right corner, single on back)                   4
    "110110000011011001000", //(square is top left, pair on front right)                     5
    "011011000100110110000", //(square is top right pair on front left)                      6
    "010110100011011000001", //(lightning on left, pair on front)                            7
    "100110010110100000110", //(lightning on left, pair on back)                             8
    "010110001010110100100", //(fish no head, pair on front)                                 9
    "001110010010001001011", //(fish no head, pair on back)                                 10
    "000011110001001010011", //(lightning on bottom, 1x pair in back left)                  11
    "000110011010100100110", //(lightning on bottom, 1x pair on back right)                 12 
    "000111100001011000011", //(bar + 1 on b left [6], 2x pair)                             13
    "000111001000110100110", //(bar + 1 on b right [8], 2x pair)                            14
    "100111000001011001010", //(bar + 1 on t left [0], 1x pair in front right)              15
    "000111100100010100110", //(bar + 1 on b left [6], 1x pair in back right)               16
    "100010001010010011110", //(dot diagonal)                                               17
    "100010100111010010010", //(dot mickey mouse bar left)                                  18
    "101010000110010011010", //(dot mickey mouse pairs left right)                          19
    "101010101010010010010", //(dot all corners no edges)                                   20
    "010111010101000101000", //(cross solved, 2x on left and right)                         21
    "010111010000001101100", //(cross solved, 2x on left, 1x on front and back)             22
    "111111010000101000000", //(all solved except headlights on front)                      23
    "011111011000100000001", //(all solved except headlights on sides)                      24
    "110111011001100000000", //(all solved except 2 corners across)                         25
    "110111010100100000100", //(antisune)                                                   26
    "010111110001001000001", //(sune)                                                       27
    "111110101010010000000", //(all solved except front and right edge)                     28
    "011110001010110000001", //(lightning + 1, on top and 1 is bl)                          29
    "110011100000011010100", //(lightning + 1, on top and 1 is br)                          30
    "011011001000110010001", //(P on right(with pair in front))                             31
    "110110100010011000100", //(P on left(with pair in front))                              32
    "001111001000110000011", //(T with pairs in front and back)                             33
    "011010011010100010001", //(C, no bar)                                                  34
    "100011011001100010010", //(fish w singles)                                             35
    "110011001000010011100", //(W with pair on left)                                        36
    "110110001011110000000", //(fish w pairs)                                               37
    "011110100110010000001", //(W with pair on right)                                       38
    "001111100000011100010", //(long zig zag pair on right)                                 39
    "100111001001110000010", //(long zig zag pair on left)                                  40
    "010110101010010000101", //(left lightning + 1 headlights in back)                      41
    "101110010010101000010", //(left lightning + 1 headlights in front)                     42
    "100110110111000000010", //(p on left bar on right)                                     43
    "001011011000000111010", //(P on right bar on left)                                     44
    "001111001000010101010", //(T with singles)                                             45
    "011010011010000111000", //(C shape with bar)                                           46
    "010011000101110010001", //(small L 1 pair in front headlights on right)                47
    "010110000010011101100", //(small L 2 pair in front headlights on left)                 48
    "010011000000011111100", //(small L with bar 1)                                         49
    "010110000111110000001", //(small L with bar 2)                                         50
    "000111000000011101110", //(bar with 2x pairs, headlights to left)                      51
    "000111000100010001111", //(bar with bar on back)                                       52
    "000011010101000111010", //(small L with bar 3)                                         53
    "010011000101010111000", //(small L with bar 4)                                         54
    "000111000000111000111", //(bar with 2 bars on front / back)                            55
    "000111000101010101010", //(bar with singles all around)                                56
    "101111101000010000010"  //(H)                                                          57
];

const OLL_MASKS_MAP: { [key: string]: { index: number; rotation: number } } = {};


OLL_MASKS.forEach((mask, index) => {
    let currentMask = mask;

    // Add all 4 rotations to the hash map
    for (let rotation = 0; rotation < 4; rotation++) {
        OLL_MASKS_MAP[currentMask] = { index: index + 1, rotation }; // Store both the algorithm index and rotation
        currentMask = rotateMask(currentMask); // Rotate the mask by 90�
    }
});


export const algorithmNicknames: { [key: string]: string } = {
    "R U R' U'": "Sexy move",
    "R' F R F'": "Sledgehammer",
    "R U R' U R U2 R'": "Sune",
    "R' U' R U' R' U2 R": "Sune from back",
};

export const ollAlgorithms: { [key: number]: string } = {
    1: "(R U2 R2) (F R F') U2 (R' F R F')",
    2: "F (R U R' U') F' f (R U R' U') f'",
    3: "f (R U R' U') f' (U') F (R U R' U') F'",
    4: "f (R U R' U') f' (U) F (R U R' U') F'",
    5: "l' U2 L U L' U l",
    6: "r U2 (R' U' R U') r'",
    7: "r (U R' U R) U2 r'",
    8: "r' (U' R U' R') U2 r",
    9: "(R U R' U') (R' F R2) (U R' U' F')",
    10: "(R U R' U) (R' F R F') (R U2 R')",
    11: "M R U R' U R U2 R' U M'",
    12: "M L' U' L U' L' U2 L U' M'",
    13: "F U R U' R2 F' R U R U' R'",
    14: "r U R' U' r' F R2 U R' U' F'",
    15: "R' F' R L' U' L U R' F R",
    16: "R' F R U R' U' F' R U' R' U2 R",
    17: "(R U R' U) (R' F R F') U2 (R' F R F')",
    18: "F (R U' R' U') (R U R' F') U' (F R U R' U' F')",
    19: "R' U2 F R U R' U' F2 U2 F R",
    20: "r' R U R U R' U' R2 r2 U R U' r'",
    21: "(R U R' U) (R U' R' U) (R U2 R')",
    22: "R U2 (R2' U') (R2 U') (R2' U') U' R",
    23: "R2 D R' U2 R D' R' U2 R'",
    24: "r U R' U' r' F R F'",
    25: "y F' r U R' U' r' F R",
    26: "R' U' R U' R' U2 R",
    27: "R U R' U R U2 R'",
    28: "r U R' U' r' R U R U' R'",
    29: "R U R' U' R U' R' F' U' F R U R'",
    30: "R U R' U' R' F R2 U' R' U' R U R' U R U' R' F'",
    31: "(R' U' F) (U R U' R') F' R",
    32: "L U F' U' L' U L F L'",
    33: "(R U R' U') (R' F R F')",
    34: "f R f' U' r' U' R U M'",
    35: "(R U2) (R2) (F R F' R) U2 R'",
    36: "(L' U' L U') (L' U L U) (L F' L' F)",
    37: "F R (U' R' U') (R U R') F'",
    38: "(R U R' U) (R U' R' U') (R' F R F')",
    39: "f' L F L' U' L' U L S",
    40: "f R' F' R U R U' R' S'",
    41: "R U R' U R U2 R' F R U R' U' F'",
    42: "(R' U' R U' R' U2 R) F (R U R' U') F'",
    43: "B' U' R' U R B",
    44: "f R U R' U' f'",
    45: "F R U R' U' F'",
    46: "r' U' F R' F' R U r",
    47: "F' (L' U' L U) (L' U' L U) F",
    48: "F (R U R' U') (R U R' U') F'",
    49: "r U' (r2 U) (r2 U) (r2) U' r",
    50: "R' F R2 B' R2 F' R2 B R'",
    51: "f (R U R' U') (R U R' U') f'",
    52: "F U R U' R' F' r U R' U R U2 r'",
    53: "(r' U' R U') (R' U R U') (R' U2 r)",
    54: "(r U R' U) (R U' R' U) (R U2 r')",
    55: "R' F R U R U' R2 F' R2 U' R' U R U R'",
    56: "(r U r') (U R U' R') (U R U' R') (r U' r')",
    57: "R U R' U' R' r U R U' r'",
};

export const algReminders: { [key: number]: string } = {
    2: "F sexy F'  f sexy f'",
    3: "f sexy f'  U'  F sexy F'",
    4: "f sexy f'  U   F sexy F'",
    5: "Fat lefty sune (U2 start)",
    6: "Fat sune (U2 start)",
    7: "Fat sune",
    8: "Fat antisune",

   
    11: "M sune",
    12: "M lefty sune",
    28: "fat sexy skinny sexy",
    57: "skinny sexy fat sexy",

    33: "Second half of y perm",
    37: "First half of y perm",

    39: "f' to left S move ending",
    40: "f to right S move ending",

    41: "sune F sexy F'",
    42: "antisune F sexy F'",
    44: "f sexy f'",
    51: "f double sexy f'",

    45: "2 look alg for line",
    47: "F' double lefty sexy F",
    48: "F double sexy F'",
    53: "fat antisune w extra double back",
    54: "fat sune w extra double back",

    49: "righty twisty thing",
    50: "lefty twisty thing",

    55: "Double flick with right index"
}

export function getOLLAlgorithm(ollMaskIndex: number, rotation: number): { original: string; nicknamed: string } | null {
    const originalAlgorithm = ollAlgorithms[ollMaskIndex];
    if (!originalAlgorithm)
        return null;

    const rotatedAlgorithm = prependRotationMoves(originalAlgorithm, rotation);
    const nicknamedAlgorithm = condenseAlgorithmWithNicknames(rotatedAlgorithm);

    return { original: rotatedAlgorithm, nicknamed: nicknamedAlgorithm };
}

function condenseAlgorithmWithNicknames(algorithm: string): string {
    let condensedAlgorithm = algorithm;

    // Define a regex to match blocks like (R U R')
    const blockRegex = /\(([^)]+)\)/g;

    // Replace each block with a styled span
    condensedAlgorithm = condensedAlgorithm.replace(blockRegex, (match) => {
        return `<span class="algorithm-block">${match}</span>`;
    });

    // Replace nicknamed sequences with styled nicknames
    for (const [sequence, nickname] of Object.entries(algorithmNicknames)) {
        const regex = new RegExp(sequence.replace(/ /g, "\\s+"), "g");
        condensedAlgorithm = condensedAlgorithm.replace(
            regex,
            `<span class="algorithm-nickname">${nickname}</span>`
        );
    }

    // Split the algorithm into individual moves and wrap each move in a span
    const moveRegex = /([RUFLDB]'?|[RUFLDB]2)/g;
    condensedAlgorithm = condensedAlgorithm.replace(moveRegex, (move) => {
        return `<span class="algorithm-move" data-move="${move}">${move}</span>`;
    });

    return condensedAlgorithm;
}

export function getRandomOLLAlgorithm(): { index: number; algorithm: string; nickname: string }
{
    // Get all OLL indices
    const ollIndices = Object.keys(ollAlgorithms).map(Number);

    // Select a random index
    const randomIndex = ollIndices[Math.floor(Math.random() * ollIndices.length)];

    // Get the algorithm and nickname
    const algorithm = ollAlgorithms[randomIndex];
    const nickname = algorithmNicknames[algorithm] || "No nickname";

    return { index: randomIndex, algorithm, nickname };
}