import { COLOR } from '../enums/color.enum.ts';
import { Piece } from './piece.model';

export type Column = {
  id: number;
  color: COLOR;
  piece: Piece;
  toMove: boolean;
};
