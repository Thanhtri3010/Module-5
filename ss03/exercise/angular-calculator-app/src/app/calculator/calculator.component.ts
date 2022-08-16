import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber = 0;
  secondNumber = 0;
  calculation: string;
  result: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculator( calculation) {
    switch (calculation) {
      case 'summation':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case 'subtraction':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case 'multiplication':
        this.result = this.firstNumber * this.secondNumber;
        break;
      case 'division':
        if (this.secondNumber !== 0) {
          this.result = this.firstNumber / this.secondNumber;
        } else {
          this.result = 'Cannot be divided by 0!';
        }
        break;
      default :
        this.result = 'Please enter the calculation';
    }
  }
}
