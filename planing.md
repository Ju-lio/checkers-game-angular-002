square {
  position {
    line: 0,
    column: 0,
  },
  available: true,
}

piece {
  id: 1,
  position {
    line: 0,
    column: 0,
  },
  player: PLAYER.NONE;
  inGame: true,
}

## OLD ##

PLAYER_ATUAL = PLAYER_1
   
   MOVIMENTO

export enum PLAYER {
   NONE = 0,
   PLAYER_1 = 1,
   PLAYER_2 = 2,
}

square {
   id: "#L0_C0",
   position: {
      line: 0,
      column: 0,
   }
   available: true,
   piece: {
      player: NONE,
      toMove: false,
      pickUp: false;
   }
}

piece {
   id: "#L0_C0",
   position: {
      line: 0,
      column: 0,
   }
   player: PLAYER_1,
   inGame: true,
}
