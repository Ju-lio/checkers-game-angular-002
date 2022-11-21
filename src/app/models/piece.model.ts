import { COLOR } from '../enums/color.enum.ts';
import { PLAYER } from '../enums/player.enum';

export type Piece = {
  id: number;
  position: {
    line: number;
    column: number;
  };
  player: PLAYER;
  color: COLOR;
  inGame: boolean;
  toMove: boolean;
};
