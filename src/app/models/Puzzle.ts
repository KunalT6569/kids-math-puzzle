import { MathOperator } from '../enums/math-operators.enum';

export class Puzzle {
    value1: number;
    value2: number;
    operator: MathOperator;
    answer: number;
    isAnswerValid: boolean;
    enteredAnswer: number;

    constructor (value1: number, value2: number, operator: MathOperator) {
        this.value1 = value1;
        this.value2 = value2;
        this.operator = operator;

        this.answer = this.getAnswer();
    }

    private getAnswer() {
        switch (this.operator) {
            case MathOperator.Add: return this.value1 + this.value2;
            case MathOperator.Subtract: return this.value1 - this.value2;
            case MathOperator.Multiply: return this.value1 * this.value2;
            case MathOperator.Divide: return parseFloat((this.value1 / this.value2).toFixed(2));
        }
    }

    public submitAnswer(val: number) {
        this.enteredAnswer = parseFloat(val.toFixed(2));
        this.isAnswerValid = val === this.answer;
    }
}