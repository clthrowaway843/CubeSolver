
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
* Rotates the U layer by uRot * 90° clockwise.
* Returns a string of 21 characters (color letters).
*/
function extractOLL21(facelets: string, yellowColor: string, uRot: number): string {
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
export function findMatchingOLLMask(facelets: string, yellowColor: string = "y"): number
{
    const reoriented = reorientFaceletsYellowTopGreenFront(facelets);
    //console.log("Facelets: " + facelets);
    //console.log("Reoriented: " + reoriented);

    for (let uRot = 0; uRot < 4; uRot++) {
        const layer = convertFaceletsToBinary(extractOLL21(reoriented, yellowColor, uRot));
        //console.log("Layer: " + layer);
        if (layer in OLL_MASKS_MAP) {
            return OLL_MASKS_MAP[layer];
        }
    }
    
    return -1; // No match found
}

/**
 * Rotate a 21-character mask by 90° clockwise.
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
    "000011011001000011011", //(square is bottom right when single on right)                 5
    "011011000100110110000", //(square is top right when single is on right)                 6
    "010110100011011000001", //(lightning on left, 2x pairs)                                 7
    "010011001000110110100", //(lightning on right, 2x pairs)                                8
    "001110010110100100010", //(fish no head, pair on right)                                 9
    "001110010010001001011", //(fish no head, pair on back)                                 10
    "000011110001001010011", //(lightning on bottom, 1x pair)                               11
    "001011010100100110010", //(lightning on right, 1x pair)                                12 
    "000111100001011000011", //(bar + 1 on b left [6], 2x pair)                             13
    "000111001000110100110", //(bar + 1 on b right [8], 2x pair)                            14
    "000111001001010001011", //(bar + 1 on b right [8], 1x pair)                            15
    "001111000100110100010", //(bar + 1 on top right [2], 1x pair)                          16
    "100010001010010011110", //(dot diagonal)                                               17
    "101010000010111010010", //(dot mickey mouse bar front)                                 18
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
    "101110010110000001010", //(lightning + 1, left)                                        29
    "101011010100000011010", //(lightning + 1, right)                                       30
    "011011001000110010001", //(P on right(with pair in front))                             31
    "001011011000100010011", //(P(upside down) on right(with pair in back))                 32
    "001111001000110000011", //(T with pairs in front and back)                             33
    "101111000100010001010", //(C shape with singles oriented as U)                         34
    "100011011001100010010", //(fish w singles)                                             35
    "100110011011100000010", //(W)                                                          36
    "110110001011110000000", //(fish w pairs)                                               37
    "011110100110010000001", //(inverse W)                                                  38
    "110010011010000011100", //(big lightning)                                              39
    "011010110010001110000", //(inverse big lightning)                                      40
    "101011010000101010010", //(left lightning + 1 headlights in back)                      41
    "101110010010101000010", //(left lightning + 1 headlights in front)                     42
    "100110110111000000010", //(upsidedown p on left with bar on right)                     43
    "001011011000000111010", //(upsidedown p on right with bar on left)                     44
    "001111001000010101010", //(T with singles)                                             45
    "110010110111000010000", //(C shape with bar)                                           46
    "010011000101110010001", //(small L 1 pair in front headlights on right)                47
    "010110000010011101100", //(small L 2 pair in front headlights on left)                 48
    "000110010111100000011", //(small L with bar 1)                                         49
    "000011010000001111110", //(small L with bar 2)                                         50
    "000111000000011101110", //(bar with 2x pairs, headlights to left)                      51
    "010010010111100010001", //(bar with bar on side)                                       52
    "000011010101000111010", //(small L with bar 3)                                         53
    "010011000101010111000", //(small L with bar 4)                                         54
    "000111000000111000111", //(bar with 2 bars on front / back)                            55
    "000111000101010101010", //(bar with singles all around)                                56
    "101111101000010000010"  //(H)                                                          57
];

const OLL_MASKS_MAP: { [key: string]: number } = {};

OLL_MASKS.forEach((mask, index) => {
    let currentMask = mask;

    // Add all 4 rotations to the hash map
    for (let rotation = 0; rotation < 4; rotation++) {
        OLL_MASKS_MAP[currentMask] = index;
        currentMask = rotateMask(currentMask); // Rotate the mask by 90°
    }
});