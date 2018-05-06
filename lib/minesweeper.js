/*
class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs)
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game over, you lose.');
      this._board.print(this._board.playerBoard);
      return false;
    } else if (this.hasSafeTiles === false) {
      console.log('Game over, you win!');
      return false;
    } else {
      console.log('Current Board:')
      this._board.print(this._board.playerBoard);
    };
  }
};


class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    };

    this._numberOfTiles--;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    // Might be able to remove these numberOfRows and numberOfColumns definitions and use the ones passed to the class.
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
        //Might be able to make this into one if statement
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') numberOfBombs++;
      };
    });
    return numberOfBombs;
  }

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }

  print(board) {
    console.log(board.map(row => row.join(' | ')).join('\n'));
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    let board = [];
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
      for (let j = 0; j < numberOfColumns; j++) row.push(' ');
      board.push(row);
    };
    return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    let board = [];
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
      for (let j = 0; j < numberOfColumns; j++) row.push(null);
      board.push(row);
    };
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    };
    return board;
  }
};


/*
function play() {

  let correctBoardConfig = false;
  size = '';
  confirm = '';
  w = 0;
  h = 0;

  while (correctBoardConfig === false) {

    size = prompt('Enter game board width and height, using numbers from 3 - 9:');
    w = parseInt(size.slice(0));
    h = parseInt(size.slice(-1));

    confirm = prompt(`You have selected a ${w}x${h} board. Is this correct? (y/n)`).slice(0).toUpperCase();
    if (confirm !== 'Y') continue;

    let b = parseInt(prompt('Enter number of bombs:'));

    confirm = prompt(`You would like ${b} bomb(s). Is this correct? (y/n)`).slice(0).toUpperCase();
    if (confirm !== 'Y') continue;

    correctBoardConfig = true;
  };

  let g = new Game(w, h, b);

  let continueGame = true;
  let guess = '';
  let x = 0;
  let y = 0;

  while (continueGame === true) {
    guess = prompt('Enter coordinates of guess.');
    x = parseInt(guess.slice(0));
    y = parseInt(guess.slice(-1));

    continueGame = g.playMove(x, y);
  };
};

play();

/*
let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);

console.log('Updated Player Board:');
printBoard(playerBoard);
*/
"use strict";