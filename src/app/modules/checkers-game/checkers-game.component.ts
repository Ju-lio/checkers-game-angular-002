import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.initGame();
  }

  initGame() {
    this.boardService.initGame();
    this.squares = this.boardService.squares;
  }

  movePiece(
    oldLine: number,
    oldColumn: number,
    newLine: number,
    newColumn: number
  ) {
    this.boardService.movePiece(oldLine, oldColumn, newLine, newColumn);
  }
}
