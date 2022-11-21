import { Component, Input, OnInit } from '@angular/core';
import { Piece } from 'src/app/models/piece.model';
import { Square } from 'src/app/models/square.model';
import { Column } from 'src/app/models/column.model';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input() square!: Square;
  @Input() column!: Column;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    // console.log(this.column.piece);
    // console.log('square');
  }
}
