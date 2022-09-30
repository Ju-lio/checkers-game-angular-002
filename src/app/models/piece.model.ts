export type Piece = {
  id: number;
  position: {
    line: number;
    column: number;
  };
  player: string;
  inGame: boolean;
  toMove?: boolean;
};
