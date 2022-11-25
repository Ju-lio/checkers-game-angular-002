import { Component, Input } from '@angular/core';
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
  piece!: Piece;

  constructor() {}
}
