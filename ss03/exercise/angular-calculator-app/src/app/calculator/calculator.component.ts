import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber = 0;
  secondNumber = 0;
  calculation: String;
  result: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculator(firstNumber, secondNumber, calculation) {
    switch (calculation) {
      case 'summation':
        this.result = firstNumber + secondNumber;
        break;
      case 'subtraction':
        this.result = firstNumber - secondNumber;
        break;
      case 'multiplication':
        this.result = firstNumber * secondNumber;
        break;
      case 'division':
        if (secondNumber != 0) {
          this.result = firstNumber / secondNumber;
          break
        } else {
          this.result = "Cannot be divided by 0!"
        }
      default :
        this.result = "Please enter the calculation"
    }
  }
}
