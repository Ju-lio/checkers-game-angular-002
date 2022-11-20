import { Component, Input } from '@angular/core';
import { PLAYER } from 'src/app/enums/player.enum';
import { Square } from 'src/app/models/square.model';
import { Piece } from 'src/app/models/piece.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  @Input() squares: Square[] = [];
  @Input() pieces: Piece[] = [];

  getColor(line: number, column: number) {
    switch ((line + column) % 2) {
      case 0:
        return 'light';
      default:
        return 'dark';
    }
  }

  getPiece(line: number, column: number): Piece {
    const pieces: Piece[] = this.pieces;
    const emptyPiece: Piece = {
      id: -1,
      position: {
        line: 0,
        column: 0,
      },
      player: PLAYER.NONE,
      inGame: true,
    };

    return (
      pieces.find(piece => {
        return piece.position.line === line && piece.position.column === column;
      }) ?? emptyPiece
    );
  }
}
