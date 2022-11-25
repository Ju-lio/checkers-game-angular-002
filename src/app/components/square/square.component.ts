import { Component, Input } from '@angular/core';
import { Square } from 'src/app/models/square.model';
import { Column } from 'src/app/models/column.model';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  @Input() square!: Square;
  @Input() column!: Column;

  constructor(private boardService: BoardService) {}

  sendPosition() {
    this.boardService.sendPosition({
      line: this.square.line,
      column: this.column.id,
    });
  }
}
