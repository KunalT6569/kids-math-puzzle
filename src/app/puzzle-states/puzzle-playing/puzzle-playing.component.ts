import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Puzzle } from 'src/app/models/Puzzle';
import { PuzzleService } from 'src/app/services/puzzle.service';
import { MathOperator } from 'src/app/enums/math-operators.enum';

@Component({
  selector: 'app-puzzle-playing',
  templateUrl: './puzzle-playing.component.html',
  styleUrls: ['./puzzle-playing.component.scss']
})
export class PuzzlePlayingComponent implements OnInit {
  @Output() gameCompleted = new EventEmitter();
  puzzle: Puzzle;
  MathOperator = MathOperator;

  public totalQuestions: number;
  public currentQuestion: number;
  public answerEntered: number;

  constructor (private puzzleService: PuzzleService) { }

  ngOnInit() {
    this.totalQuestions = this.puzzleService.puzzles.length;
    this.puzzle = this.getNextPuzzle();
  }

  public getNextPuzzle(): Puzzle {
    this.puzzleService.currentPuzzleIndex++;
    this.currentQuestion = this.puzzleService.currentPuzzleIndex + 1;
    return this.puzzleService.getLatestPuzzle();
  }

  public submitAnswer() {
    // strict check to prevent fail for integer 0
    if (this.answerEntered !== undefined && this.answerEntered !== null) {
      this.puzzle.submitAnswer(this.answerEntered);

      if (this.currentQuestion === this.totalQuestions) {
        this.gameCompleted.emit();
      } else {
        this.puzzle = this.getNextPuzzle();
      }
      this.answerEntered = null;
    }
  }
}
