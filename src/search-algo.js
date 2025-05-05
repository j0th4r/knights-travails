const squareRegistry = new Map();

const chessSquare  = (x, y) => {
  const xPosition = x;
  const yPosition = y;
  let predecessor;

  const KNIGHT_MOVES = [
    [1, 2], [1, -2],
    [2, 1], [2, -1],
    [-1, 2], [-1, -2],
    [-2, 1], [-2, -1]
  ]

  const getPredecessor = () => predecessor;
  const setPredecessor = (newPredecessor) => {
    predecessor = predecessor || newPredecessor
  }

  const name = () => `${x}, ${y}`;

  const possibleKnightMoves = () => {
    return KNIGHT_MOVES
      .map((offset) => newSquareFrom(offset[0], offset[1]))
      .filter((square) => square !== undefined);
  }

  const newSquareFrom = (xOffset, yOffset) => {
    const [newX, newY] = [xPosition + xOffset, yPosition + yOffset];
    if (0 <= newX && newX < 8 && 0 <= newY && y < 8) {
      return chessSquare(newX, newY);
    }
  }

  if (squareRegistry.has(name())) {
    return squareRegistry.get(name());
  } else {
    const newSquare = { name, getPredecessor, setPredecessor, possibleKnightMoves}
    squareRegistry.set(name(), newSquare);
    return newSquare;
  }
}

const knightsTravails = (start, finish) => {
  squareRegistry.clear();

  const origin = chessSquare(...start);
  const target = chessSquare(...finish);

  const queue = [origin];
  while (!queue.includes(target)) {
    const currentSquare = queue.shift();

    const enqueueList = currentSquare.possibleKnightMoves();
    enqueueList.forEach((square) => square.setPredecessor(currentSquare));
    queue.push(...enqueueList);
  }
  const path = [target]
  while (!path.includes(origin)) {
    const prevSquare = path[0].getPredecessor();
    path.unshift(prevSquare);;
  }
  console.log(`You made it in ${path.length - 1} moves!  Here's your path`);
  path.forEach(square => console.log(square.name()));
}

export { knightsTravails }