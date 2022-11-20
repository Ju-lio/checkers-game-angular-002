import { Component, OnInit } from '@angular/core';
import { PLAYER } from 'src/app/enums/player.enum';
import { Piece } from 'src/app/models/piece.model';
import { Square } from 'src/app/models/square.model';

@Component({
  selector: 'app-checkers-game',
  templateUrl: './checkers-game.component.html',
  styleUrls: ['./checkers-game.component.css'],
})
export class CheckersGameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initGame();
  }

  readonly boardSize = 8;

  squares: Square[] = [];
  pieces: Piece[] = [];

  initGame() {
    this.squares = this.renderLines();
    this.pieces = this.loadPieces();
  }

  renderBoard() {
    this.squares = this.renderLines();
  }

  renderLines() {
    return Array.from(Array(this.boardSize).keys()).map(line => ({
      line,
      columns: this.renderColumns(),
    }));
  }

  renderColumns() {
    return Array.from(Array(this.boardSize).keys()).map(column => ({ column }));
  }

  movePiece(
    oldLine: number,
    oldColumn: number,
    newLine: number,
    newColumn: number
  ) {
    const id = this.getPieceByPosition(oldLine, oldColumn);
    this.pieces[id].position.line = newLine;
    this.pieces[id].position.column = newColumn;
  }

  getPieceByPosition(line: number, column: number): number {
    const pieces: Piece[] = this.pieces;
    return (
      pieces.find(piece => {
        return piece.position.line === line && piece.position.column === column;
      })?.id ?? -1
    );
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
    });

    pieces.push({
      id: 1,
      position: {
        line: 0,
        column: 3,
      },
      player: PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 2,
      position: {
        line: 0,
        column: 5,
      },
      player: PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 3,
      position: {
        line: 0,
        column: 7,
      },
      player: PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 4,
      position: {
        line: 1,
        column: 0,
      },
      player: PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 5,
      position: {
        line: 1,
        column: 2,
      },
      player: PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 6,
      position: {
        line: 1,
        column: 4,
      },
      player: PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 7,
      position: {
        line: 1,
        column: 6,
      },
      player: PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 8,
      position: {
        line: 2,
        column: 1,
      },
      player: PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 9,
      position: {
        line: 2,
        column: 3,
      },
      player: PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 10,
      position: {
        line: 2,
        column: 5,
      },
      player: PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 11,
      position: {
        line: 2,
        column: 7,
      },
      player: PLAYER.TWO,
      inGame: true,
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
    });

    pieces.push({
      id: 13,
      position: {
        line: 7,
        column: 2,
      },
      player: PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 14,
      position: {
        line: 7,
        column: 4,
      },
      player: PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 15,
      position: {
        line: 7,
        column: 6,
      },
      player: PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 16,
      position: {
        line: 6,
        column: 1,
      },
      player: PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 17,
      position: {
        line: 6,
        column: 3,
      },
      player: PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 18,
      position: {
        line: 6,
        column: 5,
      },
      player: PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 19,
      position: {
        line: 6,
        column: 7,
      },
      player: PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 20,
      position: {
        line: 5,
        column: 0,
      },
      player: PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 21,
      position: {
        line: 5,
        column: 2,
      },
      player: PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 22,
      position: {
        line: 5,
        column: 4,
      },
      player: PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 23,
      position: {
        line: 5,
        column: 6,
      },
      player: PLAYER.ONE,
      inGame: true,
    });

    return pieces;
  }
}
