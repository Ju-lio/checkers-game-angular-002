import { Component, Input, OnInit } from '@angular/core';
import { COLOR } from 'src/app/enums/color.enum.ts';
import { PLAYER } from 'src/app/enums/player.enum';
import { Piece } from 'src/app/models/piece.model';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css'],
})
export class PieceComponent implements OnInit {
  @Input() piece?: Piece;

  toMove?: boolean = this.piece?.toMove;

  readonly PLAYER_1 = PLAYER.ONE;
  readonly PLAYER_2 = PLAYER.TWO;
  readonly LIGHT_COLOR = COLOR.LIGHT;
  readonly DARK_COLOR = COLOR.DARK;

  constructor() {}

  ngOnInit(): void {}

  getColor() {
    console.log(this.piece?.player);
    switch (this.piece?.player) {
      case this.PLAYER_1:
        return 'light';
      case this.PLAYER_2:
        return 'dark';
      default:
        return '';
    }
  }

  changeMove(): void {
    this.toMove = !this.toMove;
  }
}
