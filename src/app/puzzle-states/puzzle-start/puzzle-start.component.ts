import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PuzzleService } from 'src/app/services/puzzle.service';

@Component({
  selector: 'app-puzzle-start',
  templateUrl: './puzzle-start.component.html',
  styleUrls: ['./puzzle-start.component.scss']
})
export class PuzzleStartComponent {
  @Output() startGame = new EventEmitter();
  questions: number = 20;

  constructor (private puzzleService: PuzzleService) { }

  public startQuiz() {
    this.puzzleService.totalPuzzles = this.questions;
    this.puzzleService.createPuzzles();
    this.startGame.emit();
  }
}
