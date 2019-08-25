import { Injectable } from '@angular/core';
import { MathOperator } from '../enums/math-operators.enum';
import { Puzzle } from '../models/Puzzle';

@Injectable()
export class PuzzleService {
    readonly maxNumber = 10;
    totalPuzzles = 20;

    public currentPuzzleIndex: number = -1;
    public puzzles: Puzzle[] = [];

    constructor () {
    }

    public createPuzzles(): void {
        for (let i = 0;i < this.totalPuzzles;i++) {
            let randomValue1 = this.getRandomNumber();
            let randomValue2 = this.getRandomNumber();

            const puzzle = new Puzzle(randomValue1, randomValue2, this.getRandomOperator());
            this.puzzles.push(puzzle);
        }
    }

    public getLatestPuzzle(): Puzzle {
        return this.puzzles[this.currentPuzzleIndex];
    }

    public getFinalScore(): number {
        let score = 0;
        this.puzzles.forEach((puzzle) => {
            if (puzzle.isAnswerValid) {
                score++;
            }
        });
        return score;
    }

    private getRandomOperator(): MathOperator {
        const num: number = Math.ceil(Math.random() * 4);
        const operator: MathOperator = num;
        return operator;
    }

    private getRandomNumber(): number {
        return Math.ceil(Math.random() * this.maxNumber);
    }
}