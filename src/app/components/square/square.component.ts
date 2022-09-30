import { Component, Input, OnInit } from '@angular/core';
import { Piece } from 'src/app/models/piece.model';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input() color: string = 'light ';
  @Input() line: number = 0;
  @Input() column: number = 0;
  @Input() piece?: Piece;

  available = false;

  constructor() {}

  ngOnInit(): void {}

  getColor(line: number, column: number) {
    switch ((line + column) % 2) {
      case 0:
        return 'light';
      default:
        return 'dark';
    }
  }

  validId() {
    return this.piece?.id !== -1;
  }
}
