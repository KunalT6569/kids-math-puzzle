import { Component, OnInit } from '@angular/core';
import { PuzzleService } from 'src/app/services/puzzle.service';
import { Puzzle } from 'src/app/models/Puzzle';

@Component({
  selector: 'app-puzzle-completed',
  templateUrl: './puzzle-completed.component.html',
  styleUrls: ['./puzzle-completed.component.scss']
})
export class PuzzleCompletedComponent implements OnInit {

  totalQuestions: number;
  score: number;

  puzzles: Puzzle[];

  constructor (private puzzleService: PuzzleService) { }

  ngOnInit() {
    this.score = this.puzzleService.getFinalScore();
    this.totalQuestions = this.puzzleService.totalPuzzles;

    this.puzzles = this.puzzleService.puzzles;
  }

}
