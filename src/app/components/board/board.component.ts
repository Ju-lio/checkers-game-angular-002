import { Component, OnInit } from '@angular/core';
import { PLAYER } from 'src/app/enums/player.enum';
import { Board } from 'src/app/models/board.model';
import { Piece } from 'src/app/models/piece.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  readonly boardSize = 8;
  readonly PLAYER = PLAYER;

  boards: Board[] = [];
  pieces: Piece[] = [];

  constructor() {}

  ngOnInit(): void {
    this.renderBoard();
  }

  renderBoard() {
    this.boards = this.renderLines();
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

  getColor(line: number, column: number) {
    switch ((line + column) % 2) {
      case 0:
        return 'light';
      default:
        return 'dark';
    }
  }

  getPiece(line: number, column: number): Piece {
    const pieces: Piece[] = this.loadPieces();
    const emptyPiece: Piece = {
      id: -1,
      position: {
        line: 0,
        column: 0,
      },
      player: this.PLAYER.NONE,
      inGame: true,
    };

    return (
      pieces.find(piece => {
        return piece.position.line === line && piece.position.column === column;
      }) ?? emptyPiece
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
      player: this.PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 1,
      position: {
        line: 0,
        column: 3,
      },
      player: this.PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 2,
      position: {
        line: 0,
        column: 5,
      },
      player: this.PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 3,
      position: {
        line: 0,
        column: 7,
      },
      player: this.PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 4,
      position: {
        line: 1,
        column: 0,
      },
      player: this.PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 5,
      position: {
        line: 1,
        column: 2,
      },
      player: this.PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 6,
      position: {
        line: 1,
        column: 4,
      },
      player: this.PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 7,
      position: {
        line: 1,
        column: 6,
      },
      player: this.PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 0,
      position: {
        line: 2,
        column: 1,
      },
      player: this.PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 1,
      position: {
        line: 2,
        column: 3,
      },
      player: this.PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 2,
      position: {
        line: 2,
        column: 5,
      },
      player: this.PLAYER.TWO,
      inGame: true,
    });

    pieces.push({
      id: 3,
      position: {
        line: 2,
        column: 7,
      },
      player: this.PLAYER.TWO,
      inGame: true,
    });

    // PLAYER 2

    pieces.push({
      id: 8,
      position: {
        line: 7,
        column: 0,
      },
      player: this.PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 9,
      position: {
        line: 7,
        column: 2,
      },
      player: this.PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 10,
      position: {
        line: 7,
        column: 4,
      },
      player: this.PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 11,
      position: {
        line: 7,
        column: 6,
      },
      player: this.PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 12,
      position: {
        line: 6,
        column: 1,
      },
      player: this.PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 13,
      position: {
        line: 6,
        column: 3,
      },
      player: this.PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 14,
      position: {
        line: 6,
        column: 5,
      },
      player: this.PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 15,
      position: {
        line: 6,
        column: 7,
      },
      player: this.PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 16,
      position: {
        line: 5,
        column: 0,
      },
      player: this.PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 17,
      position: {
        line: 5,
        column: 2,
      },
      player: this.PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 18,
      position: {
        line: 5,
        column: 4,
      },
      player: this.PLAYER.ONE,
      inGame: true,
    });

    pieces.push({
      id: 19,
      position: {
        line: 5,
        column: 6,
      },
      player: this.PLAYER.ONE,
      inGame: true,
    });

    return pieces;
  }
}
