import { Component, OnInit, Input } from '@angular/core';
import { MathOperator } from 'src/app/enums/math-operators.enum';

@Component({
  selector: 'app-operator-renderer',
  templateUrl: './operator-renderer.component.html',
  styleUrls: ['./operator-renderer.component.scss']
})
export class OperatorRendererComponent {
  @Input() operator: MathOperator;
  MathOperator = MathOperator;
}
