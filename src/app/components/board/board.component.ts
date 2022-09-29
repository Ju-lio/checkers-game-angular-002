import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  readonly boardSize = 8;

  boards: Board[] = [];

  constructor() { }

  ngOnInit(): void {
    this.renderBoard();
  }

  renderBoard() {
    this.boards = this.renderLines();
  }

  renderLines() {
    return Array.from(Array(this.boardSize).keys()).map(line => ({line, columns: this.renderColumns()}));
  }

  renderColumns() {
    return Array.from(Array(this.boardSize).keys()).map(column => ({column}));
  }

  getColor(line: number, column: number) {
    switch ((line + column)%2) {
      case 0:
        return 'light';
      default:
        return 'dark';
    }
  }
}
