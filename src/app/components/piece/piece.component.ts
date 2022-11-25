import { Component, Input } from '@angular/core';
import { Piece } from 'src/app/models/piece.model';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css'],
})
export class PieceComponent {
  @Input() piece!: Piece;

  toMove?: boolean = this.piece?.toMove;

  constructor() {}

  changeMove(): void {
    this.toMove = !this.toMove;
  }
}
