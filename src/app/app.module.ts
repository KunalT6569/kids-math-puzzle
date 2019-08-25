import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PuzzleContainerComponent } from './puzzle-container/puzzle-container.component';
import { PuzzleStartComponent } from './puzzle-states/puzzle-start/puzzle-start.component';
import { PuzzlePlayingComponent } from './puzzle-states/puzzle-playing/puzzle-playing.component';
import { PuzzleCompletedComponent } from './puzzle-states/puzzle-completed/puzzle-completed.component';
import { OperatorRendererComponent } from './utility/operator-renderer/operator-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleContainerComponent,
    PuzzleStartComponent,
    PuzzlePlayingComponent,
    PuzzleCompletedComponent,
    OperatorRendererComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
