import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { GameInputComponent } from './game-container/game-input/game-input.component';
import { GameResultComponent } from './game-container/game-result/game-result.component';

@NgModule({
  declarations: [
    AppComponent,
    GameContainerComponent,
    GameInputComponent,
    GameResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
