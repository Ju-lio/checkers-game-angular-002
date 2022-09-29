import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieceComponent } from './components/piece/piece.component';
import { SquareComponent } from './components/square/square.component';
import { BoardComponent } from './components/board/board.component';
import { CheckersGameComponent } from './modules/checkers-game/checkers-game.component';

@NgModule({
  declarations: [
    AppComponent,
    PieceComponent,
    SquareComponent,
    BoardComponent,
    CheckersGameComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
