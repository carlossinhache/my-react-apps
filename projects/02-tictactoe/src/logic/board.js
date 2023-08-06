import { WINNER_COMBINATIONS } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
  // revisar todas las combinaciones para ver si hay un ganador
  for (const combination of WINNER_COMBINATIONS) {
    const [a, b, c] = combination;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // no hay ganador
  return null;
};
