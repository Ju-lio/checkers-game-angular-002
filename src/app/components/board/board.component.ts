import { Component, Input, OnInit } from '@angular/core';
import { Square } from 'src/app/models/square.model';
import { Piece } from 'src/app/models/piece.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  @Input() squares: Square[] = [];
  @Input() pieces: Piece[] = [];
  piece!: Piece;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    // console.log('board');
    // console.log(this.pieces);
  }
}
