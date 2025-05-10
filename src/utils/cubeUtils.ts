import { KPattern } from 'cubing/kpuzzle';

export function printPieceInfo(pattern: KPattern, orbit: "CORNERS" | "EDGES" | "CENTERS", pieceIndices: number[]): void {
    console.log(`Orbit: ${orbit}`);
    pieceIndices.forEach((index) => {
        const position = pattern.patternData[orbit].pieces[index];
        const orientation = pattern.patternData[orbit].orientation[index];
        console.log(`Piece ${index}: Position = ${position}, Orientation = ${orientation}`);
    });
}