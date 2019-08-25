import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '../services/puzzle.service';
import { QuizState } from '../enums/quiz-state.enum';

@Component({
  selector: 'app-puzzle-container',
  templateUrl: './puzzle-container.component.html',
  styleUrls: ['./puzzle-container.component.scss'],
  providers: [PuzzleService]
})
export class PuzzleContainerComponent  {
  QuizState = QuizState;
  state: QuizState = QuizState.Start;

  constructor () { }

  public startGame() {
    this.state = QuizState.Playing;
  }

  public gameCompleted() {
    this.state = QuizState.Over;
  }
}
