
import { cube3x3x3 } from 'cubing/puzzles';
import { KPattern, KPatternData, KPuzzle } from 'cubing/kpuzzle';

var KPUZZLE_333: KPuzzle;
cube3x3x3.kpuzzle().then(v => KPUZZLE_333 = v);

const REID_EDGE_ORDER = "UF UR UB UL DF DR DB DL FR FL BR BL".split(" ");
const REID_CORNER_ORDER = "UFR URB UBL ULF DRF DFL DLB DBR".split(" ");
const REID_CENTER_ORDER = "U L F R B D".split(" ");

const REID_TO_FACELETS_MAP: [number, number, number][] = [
  [1, 2, 0],
  [0, 2, 0],
  [1, 1, 0],
  [0, 3, 0],
  [2, 0, 0],
  [0, 1, 0],
  [1, 3, 0],
  [0, 0, 0],
  [1, 0, 0],
  [1, 0, 2],
  [0, 1, 1],
  [1, 1, 1],
  [0, 8, 1],
  [2, 3, 0],
  [0, 10, 1],
  [1, 4, 1],
  [0, 5, 1],
  [1, 7, 2],
  [1, 3, 2],
  [0, 0, 1],
  [1, 0, 1],
  [0, 9, 0],
  [2, 2, 0],
  [0, 8, 0],
  [1, 5, 1],
  [0, 4, 1],
  [1, 4, 2],
  [1, 5, 0],
  [0, 4, 0],
  [1, 4, 0],
  [0, 7, 0],
  [2, 5, 0],
  [0, 5, 0],
  [1, 6, 0],
  [0, 6, 0],
  [1, 7, 0],
  [1, 2, 2],
  [0, 3, 1],
  [1, 3, 1],
  [0, 11, 1],
  [2, 1, 0],
  [0, 9, 1],
  [1, 6, 1],
  [0, 7, 1],
  [1, 5, 2],
  [1, 1, 2],
  [0, 2, 1],
  [1, 2, 1],
  [0, 10, 0],
  [2, 4, 0],
  [0, 11, 0],
  [1, 7, 1],
  [0, 6, 1],
  [1, 6, 2],
];

const CORNER_MAPPING = [
  [0, 21, 15],
  [5, 13, 47],
  [7, 45, 39],
  [2, 37, 23],
  [29, 10, 16],
  [31, 18, 32],
  [26, 34, 40],
  [24, 42, 8],
];

const EDGE_MAPPING = [
  [1, 22],
  [3, 14],
  [6, 46],
  [4, 38],
  [30, 17],
  [27, 9],
  [25, 41],
  [28, 33],
  [19, 12],
  [20, 35],
  [44, 11],
  [43, 36],
];

const FACE_ORDER = "URFDLB";

interface PieceInfo {
  piece: number;
  orientation: number;
};

const PIECE_MAP: { [s: string]: PieceInfo } = {};

REID_EDGE_ORDER.forEach((edge, idx) => {
  for (let i = 0; i < 2; i++) {
    PIECE_MAP[rotateLeft(edge, i)] = { piece: idx, orientation: i };
  }
});

REID_CORNER_ORDER.forEach((corner, idx) => {
  for (let i = 0; i < 3; i++) {
    PIECE_MAP[rotateLeft(corner, i)] = { piece: idx, orientation: i };
  }
});

function rotateLeft(s: string, i: number): string {
  return s.slice(i) + s.slice(0, i);
}

function toReid333Struct(pattern: KPattern): string[][] {
  const output: string[][] = [[], []];
  for (let i = 0; i < 6; i++) {
    if (pattern.patternData["CENTERS"].pieces[i] !== i) {
      throw new Error("non-oriented puzzles are not supported");
    }
  }
  for (let i = 0; i < 12; i++) {
    output[0].push(
      rotateLeft(
        REID_EDGE_ORDER[pattern.patternData["EDGES"].pieces[i]],
        pattern.patternData["EDGES"].orientation[i],
      ),
    );
  }
  for (let i = 0; i < 8; i++) {
    output[1].push(
      rotateLeft(
        REID_CORNER_ORDER[pattern.patternData["CORNERS"].pieces[i]],
        pattern.patternData["CORNERS"].orientation[i],
      ),
    );
  }
  output.push(REID_CENTER_ORDER);
  return output;
}

/**
 * Convert cubing.js KPattern object to the facelets string in the Kociemba notation
 * @param pattern Source KPattern object
 * @returns String representing cube faceletsin the Kociemba notation
 */
function patternToFacelets(pattern: KPattern): string {
  const reid = toReid333Struct(pattern);
  return REID_TO_FACELETS_MAP.map(([orbit, perm, ori]) => reid[orbit][perm][ori]).join("");
}

/**
 * Convert facelets string in the Kociemba notation to the cubing.js KPattern object
 * @param facelets Source string with facelets in the Kociemba notation
 * @returns KPattern object representing cube state
 */
function faceletsToPattern(facelets: string): KPattern {

  const stickers: number[] = [];
  facelets.match(/.{9}/g)?.forEach(face => {
    face.split('').reverse().forEach((s, i) => {
      if (i != 4)
        stickers.push(FACE_ORDER.indexOf(s));
    });
  });

  const patternData: KPatternData = {
    CORNERS: {
      pieces: [],
      orientation: [],
    },
    EDGES: {
      pieces: [],
      orientation: [],
    },
    CENTERS: {
      pieces: [0, 1, 2, 3, 4, 5],
      orientation: [0, 0, 0, 0, 0, 0],
      orientationMod: [1, 1, 1, 1, 1, 1]
    },
  };

  for (const cm of CORNER_MAPPING) {
    const pi: PieceInfo = PIECE_MAP[cm.map((i) => FACE_ORDER[stickers[i]]).join('')];
    patternData.CORNERS.pieces.push(pi.piece);
    patternData.CORNERS.orientation.push(pi.orientation);
  }

  for (const em of EDGE_MAPPING) {
    const pi: PieceInfo = PIECE_MAP[em.map((i) => FACE_ORDER[stickers[i]]).join('')];
    patternData.EDGES.pieces.push(pi.piece);
    patternData.EDGES.orientation.push(pi.orientation);
  }

  return new KPattern(KPUZZLE_333, patternData);

}

function isWhiteCrossSolved(pattern: KPattern): boolean {
    const whiteFace = "U"; 

    return REID_EDGE_ORDER.slice(0, 4).every((edge, idx) => {
        const piece = pattern.patternData.EDGES.pieces[idx];
        const orientation = pattern.patternData.EDGES.orientation[idx];
        const edgeName = rotateLeft(REID_EDGE_ORDER[piece], orientation);

        return edgeName === edge && edgeName.includes(whiteFace);
    });
}
function findF2LPairs(pattern: KPattern): {
    pair: string,
    corner: { position: string, orientation: number },
    edge: { position: string, orientation: number }
}[] {
    // Define the fixed F2L pair identities and their solved positions
    const F2L_PAIRS = [
        { pair: "white/green/orange", corner: "ULF", edge: "FL" }, // Front-left slot
        { pair: "white/green/red", corner: "UFR", edge: "FR" },    // Front-right slot
        { pair: "white/red/blue", corner: "URB", edge: "BR" },     // Back-right slot
        { pair: "white/orange/blue", corner: "UBL", edge: "BL" }   // Back-left slot
    ];

    const f2lPairs: {
        pair: string,
        corner: { position: string, orientation: number },
        edge: { position: string, orientation: number }
    }[] = [];

    // Iterate over the fixed F2L pairs in order
    F2L_PAIRS.forEach(({ pair, corner, edge }) => {
        // Find the current position and orientation of the corner piece
        const cornerIndex = REID_CORNER_ORDER.indexOf(corner); // Solved position of the corner
        const currentCornerPosition = pattern.patternData.CORNERS.pieces.findIndex(piece => piece === cornerIndex); // Current position
        const cornerOrientation = pattern.patternData.CORNERS.orientation[currentCornerPosition]; // Orientation
        const cornerPositionName = REID_CORNER_ORDER[currentCornerPosition]; // Name of the current position

        // Find the current position and orientation of the edge piece
        const edgeIndex = REID_EDGE_ORDER.indexOf(edge); // Solved position of the edge
        const currentEdgePosition = pattern.patternData.EDGES.pieces.findIndex(piece => piece === edgeIndex); // Current position
        const edgeOrientation = pattern.patternData.EDGES.orientation[currentEdgePosition]; // Orientation
        const edgePositionName = REID_EDGE_ORDER[currentEdgePosition]; // Name of the current position

        // Add the pair to the result
        f2lPairs.push({
            pair,
            corner: { position: cornerPositionName, orientation: cornerOrientation },
            edge: { position: edgePositionName, orientation: edgeOrientation }
        });
    });

    return f2lPairs;
}

function isF2LSolved(pattern: KPattern): boolean {
    const f2lPairs = findF2LPairs(pattern);

    return f2lPairs.every(({ pair, corner, edge }) => {
        // Get the solved positions of the corner and edge for this pair
        const solvedCornerIndex = REID_CORNER_ORDER.indexOf(corner.position);
        const solvedEdgeIndex = REID_EDGE_ORDER.indexOf(edge.position);

        // Check if the corner is in its solved position and orientation
        const isCornerSolved =
            pattern.patternData.CORNERS.pieces[solvedCornerIndex] === solvedCornerIndex &&
            pattern.patternData.CORNERS.orientation[solvedCornerIndex] === 0;

        // Check if the edge is in its solved position and orientation
        const isEdgeSolved =
            pattern.patternData.EDGES.pieces[solvedEdgeIndex] === solvedEdgeIndex &&
            pattern.patternData.EDGES.orientation[solvedEdgeIndex] === 0;

        // Both the corner and edge must be solved for this pair to be considered solved
        return isCornerSolved && isEdgeSolved;
    });
}
function isOLLSolved(pattern: KPattern): boolean {
    const facelets = patternToFacelets(pattern);

    // Extract the (D face) from the facelets string
    const yellowFace = facelets.slice(27, 36);

    // Check if all stickers on the U face are yellow (D)
    const allYellow = yellowFace.split("").every(sticker => sticker === "D");

    return allYellow;
}

function isPLLSolved(pattern: KPattern): boolean {
    // Check if all corners are in their correct positions and orientations
    const allCornersCorrect = REID_CORNER_ORDER.every((corner, idx) => {
        const cornerPiece = pattern.patternData.CORNERS.pieces[idx];
        const cornerOrientation = pattern.patternData.CORNERS.orientation[idx];
        return cornerPiece === idx && cornerOrientation === 0; // Correct position and orientation
    });

    // Check if all edges are in their correct positions and orientations
    const allEdgesCorrect = REID_EDGE_ORDER.every((edge, idx) => {
        const edgePiece = pattern.patternData.EDGES.pieces[idx];
        const edgeOrientation = pattern.patternData.EDGES.orientation[idx];
        return edgePiece === idx && edgeOrientation === 0; // Correct position and orientation
    });

    return allCornersCorrect && allEdgesCorrect;
}

export {
    patternToFacelets,
    faceletsToPattern,
    isWhiteCrossSolved,
    isF2LSolved,
    isOLLSolved,
    isPLLSolved
}
