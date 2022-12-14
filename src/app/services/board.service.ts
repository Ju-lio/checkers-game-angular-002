import { Injectable, EventEmitter } from '@angular/core';
import { COLOR } from '../enums/color.enum.ts';
import { PLAYER } from '../enums/player.enum';
import { Piece } from '../models/piece.model';
import { Position } from '../models/position.model';
import { Square } from '../models/square.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor() {}

  readonly boardSize = 8;
  squares: Square[] = [];
  initialPieces: Piece[] = [];

  // _tabuleiro;
  eventEmmiter = new EventEmitter<Position>();

  sendPosition(position: Position) {
    this.eventEmmiter.emit(position);
  }

  getPosition() {
    return this.eventEmmiter;
  }

  initGame() {
    this.initialPieces = this.loadPieces();
    this.squares = this.renderLines();
  }

  renderBoard() {
    this.squares = this.renderLines();
  }

  renderLines() {
    return Array.from(Array(this.boardSize).keys()).map(line => ({
      line,
      columns: this.renderColumns(line),
    }));
  }

  renderColumns(line: number) {
    return Array.from(Array(this.boardSize).keys()).map(column => ({
      id: column,
      color: this.getSquareColor(line, column),
      piece: this.getInitialPiece(line, column),
      toMove: false,
    }));
  }

  getSquareColor(line: number, column: number): COLOR {
    switch ((line + column) % 2) {
      case 0:
        return COLOR.LIGHT;
      default:
        return COLOR.DARK;
    }
  }

  getInitialPiece(line: number, column: number): Piece {
    const pieces: Piece[] = this.initialPieces;
    return (
      pieces.find(piece => {
        return piece.position.line === line && piece.position.column === column;
      }) ?? this.getEmptyPiece()
    );
  }

  movePiece(oldPosition: Position, newPosition: Position) {
    if (this.validMove(oldPosition, newPosition)) {
      this.squares[newPosition.line].columns[newPosition.column].piece =
        this.squares[oldPosition.line].columns[oldPosition.column].piece;

      this.squares[oldPosition.line].columns[oldPosition.column].piece =
        this.getEmptyPiece();
    }
  }

  validSquare(oldPosition: Position, newPosition: Position) {
    if (
      this.squares[newPosition.line].columns[newPosition.column].piece.inGame
    ) {
      return false;
    }

    if ((newPosition.line + newPosition.column) % 2 === 0) {
      return false;
    }

    if (
      Math.abs(newPosition.line - oldPosition.line) > 1 ||
      Math.abs(newPosition.column - oldPosition.column) > 1
    ) {
      if (
        Math.abs(newPosition.line - oldPosition.line) > 2 ||
        Math.abs(newPosition.column - oldPosition.column) > 2
      ) {
        return false;
      } else {
        if (
          !this.squares[
            oldPosition.line - (oldPosition.line - newPosition.line) / 2
          ].columns[
            oldPosition.column - (oldPosition.column - newPosition.column) / 2
          ].piece.inGame
        ) {
          return false;
        }
        if (
          this.squares[
            oldPosition.line - (oldPosition.line - newPosition.line) / 2
          ].columns[
            oldPosition.column - (oldPosition.column - newPosition.column) / 2
          ].piece.inGame
        ) {
          if (
            this.squares[
              oldPosition.line - (oldPosition.line - newPosition.line) / 2
            ].columns[
              oldPosition.column - (oldPosition.column - newPosition.column) / 2
            ].piece.color ===
            this.squares[oldPosition.line].columns[oldPosition.column].piece
              .color
          ) {
            return false;
          }
        }
        return true;
      }
    }
    return true;
  }

  validMove(oldPosition: Position, newPosition: Position) {
    if (
      this.squares[newPosition.line].columns[newPosition.column].piece.inGame
    ) {
      return false;
    }

    if ((newPosition.line + newPosition.column) % 2 === 0) {
      return false;
    }

    if (
      Math.abs(newPosition.line - oldPosition.line) > 1 ||
      Math.abs(newPosition.column - oldPosition.column) > 1
    ) {
      if (
        Math.abs(newPosition.line - oldPosition.line) > 2 ||
        Math.abs(newPosition.column - oldPosition.column) > 2
      ) {
        return false;
      } else {
        if (
          !this.squares[
            oldPosition.line - (oldPosition.line - newPosition.line) / 2
          ].columns[
            oldPosition.column - (oldPosition.column - newPosition.column) / 2
          ].piece.inGame
        ) {
          return false;
        }
        if (
          this.squares[
            oldPosition.line - (oldPosition.line - newPosition.line) / 2
          ].columns[
            oldPosition.column - (oldPosition.column - newPosition.column) / 2
          ].piece.inGame
        ) {
          if (
            this.squares[
              oldPosition.line - (oldPosition.line - newPosition.line) / 2
            ].columns[
              oldPosition.column - (oldPosition.column - newPosition.column) / 2
            ].piece.color ===
            this.squares[oldPosition.line].columns[oldPosition.column].piece
              .color
          ) {
            return false;
          }
          this.squares[
            oldPosition.line - (oldPosition.line - newPosition.line) / 2
          ].columns[
            oldPosition.column - (oldPosition.column - newPosition.column) / 2
          ].piece = this.getEmptyPiece();
        }
        return true;
      }
    }

    return true;
  }

  getEmptyPiece() {
    const emptyPiece: Piece = {
      id: -1,
      player: PLAYER.NONE,
      inGame: false,
      position: {
        column: -1,
        line: -1,
      },
      toMove: false,
      color: COLOR.NONE,
    };

    return emptyPiece;
  }

  loadPieces() {
    const pieces: Piece[] = [];

    pieces.push({
      id: 0,
      position: {
        line: 0,
        column: 1,
      },
      player: PLAYER.TWO,
      inGame: true,
      toMove: false,
      color: COLOR.DARK,
    });

    pieces.push({
      id: 1,
      position: {
        line: 0,
        column: 3,
      },
      player: PLAYER.TWO,
      inGame: true,
      toMove: false,
      color: COLOR.DARK,
    });

    pieces.push({
      id: 2,
      position: {
        line: 0,
        column: 5,
      },
      player: PLAYER.TWO,
      inGame: true,
      toMove: false,
      color: COLOR.DARK,
    });

    pieces.push({
      id: 3,
      position: {
        line: 0,
        column: 7,
      },
      player: PLAYER.TWO,
      inGame: true,
      toMove: false,
      color: COLOR.DARK,
    });

    pieces.push({
      id: 4,
      position: {
        line: 1,
        column: 0,
      },
      player: PLAYER.TWO,
      inGame: true,
      toMove: false,
      color: COLOR.DARK,
    });

    pieces.push({
      id: 5,
      position: {
        line: 1,
        column: 2,
      },
      player: PLAYER.TWO,
      inGame: true,
      toMove: false,
      color: COLOR.DARK,
    });

    pieces.push({
      id: 6,
      position: {
        line: 1,
        column: 4,
      },
      player: PLAYER.TWO,
      inGame: true,
      toMove: false,
      color: COLOR.DARK,
    });

    pieces.push({
      id: 7,
      position: {
        line: 1,
        column: 6,
      },
      player: PLAYER.TWO,
      inGame: true,
      toMove: false,
      color: COLOR.DARK,
    });

    pieces.push({
      id: 8,
      position: {
        line: 2,
        column: 1,
      },
      player: PLAYER.TWO,
      inGame: true,
      toMove: false,
      color: COLOR.DARK,
    });

    pieces.push({
      id: 9,
      position: {
        line: 2,
        column: 3,
      },
      player: PLAYER.TWO,
      inGame: true,
      toMove: false,
      color: COLOR.DARK,
    });

    pieces.push({
      id: 10,
      position: {
        line: 2,
        column: 5,
      },
      player: PLAYER.TWO,
      inGame: true,
      toMove: false,
      color: COLOR.DARK,
    });

    pieces.push({
      id: 11,
      position: {
        line: 2,
        column: 7,
      },
      player: PLAYER.TWO,
      inGame: true,
      toMove: false,
      color: COLOR.DARK,
    });

    // PLAYER 2

    pieces.push({
      id: 12,
      position: {
        line: 7,
        column: 0,
      },
      player: PLAYER.ONE,
      inGame: true,
      toMove: false,
      color: COLOR.LIGHT,
    });

    pieces.push({
      id: 13,
      position: {
        line: 7,
        column: 2,
      },
      player: PLAYER.ONE,
      inGame: true,
      toMove: false,
      color: COLOR.LIGHT,
    });

    pieces.push({
      id: 14,
      position: {
        line: 7,
        column: 4,
      },
      player: PLAYER.ONE,
      inGame: true,
      toMove: false,
      color: COLOR.LIGHT,
    });

    pieces.push({
      id: 15,
      position: {
        line: 7,
        column: 6,
      },
      player: PLAYER.ONE,
      inGame: true,
      toMove: false,
      color: COLOR.LIGHT,
    });

    pieces.push({
      id: 16,
      position: {
        line: 6,
        column: 1,
      },
      player: PLAYER.ONE,
      inGame: true,
      toMove: false,
      color: COLOR.LIGHT,
    });

    pieces.push({
      id: 17,
      position: {
        line: 6,
        column: 3,
      },
      player: PLAYER.ONE,
      inGame: true,
      toMove: false,
      color: COLOR.LIGHT,
    });

    pieces.push({
      id: 18,
      position: {
        line: 6,
        column: 5,
      },
      player: PLAYER.ONE,
      inGame: true,
      toMove: false,
      color: COLOR.LIGHT,
    });

    pieces.push({
      id: 19,
      position: {
        line: 6,
        column: 7,
      },
      player: PLAYER.ONE,
      inGame: true,
      toMove: false,
      color: COLOR.LIGHT,
    });

    pieces.push({
      id: 20,
      position: {
        line: 5,
        column: 0,
      },
      player: PLAYER.ONE,
      inGame: true,
      toMove: false,
      color: COLOR.LIGHT,
    });

    pieces.push({
      id: 21,
      position: {
        line: 5,
        column: 2,
      },
      player: PLAYER.ONE,
      inGame: true,
      toMove: false,
      color: COLOR.LIGHT,
    });

    pieces.push({
      id: 22,
      position: {
        line: 5,
        column: 4,
      },
      player: PLAYER.ONE,
      inGame: true,
      toMove: false,
      color: COLOR.LIGHT,
    });

    pieces.push({
      id: 23,
      position: {
        line: 5,
        column: 6,
      },
      player: PLAYER.ONE,
      inGame: true,
      toMove: false,
      color: COLOR.LIGHT,
    });

    return pieces;
  }
}
