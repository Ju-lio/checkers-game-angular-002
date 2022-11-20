import { Component, Input } from '@angular/core';
import { Piece } from 'src/app/models/piece.model';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  @Input() color: string = 'light';
  @Input() line: number = 0;
  @Input() column: number = 0;
  @Input() piece?: Piece;

  toMove: boolean = false;

  available = false;

  constructor() {}

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

  changeMove(): void {
    this.toMove = !this.toMove;
  }
}
