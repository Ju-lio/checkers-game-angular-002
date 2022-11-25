import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/models/position.model';
import { Square } from 'src/app/models/square.model';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-checkers-game',
  templateUrl: './checkers-game.component.html',
  styleUrls: ['./checkers-game.component.css'],
})
export class CheckersGameComponent implements OnInit {
  constructor(private boardService: BoardService) {}

  squares: Square[] = [];

  oldPosition?: Position;
  newPosition?: Position;

  ngOnInit(): void {
    this.initGame();

    this.boardService.getPosition().subscribe({
      next: (position: Position) => {
        this.setMovePosition(position);
      },
    });
  }

  setMovePosition(position: Position) {
    if (!this.oldPosition) {
      this.setOldPosition(position);
    } else {
      this.setNewPosition(position);
    }
  }

  setOldPosition(position: Position) {
    this.oldPosition = position;
    if (this.oldPosition) {
      if (
        this.boardService.validSquare(position, {
          line: position.line + 1,
          column: position.column + 1,
        })
      ) {
        this.squares[position.line + 1].columns[position.column + 1].toMove =
          true;
      }
    }
  }

  setNewPosition(position: Position) {
    this.newPosition = position;
    if (this.oldPosition) {
      this.movePiece(this.oldPosition, this.newPosition);
    }
  }

  initGame() {
    this.boardService.initGame();
    this.squares = this.boardService.squares;
  }

  movePiece(oldPosition: Position, newPosition: Position) {
    this.boardService.movePiece(oldPosition, newPosition);
    this.clearPositions();
  }

  clearPositions() {
    this.oldPosition = undefined;
    this.newPosition = undefined;
  }
}
