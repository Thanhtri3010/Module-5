import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar-component.component.html',
  styleUrls: ['./rating-bar-component.component.css']
})
export class RatingBarComponentComponent implements OnInit {
  units: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  value: number;
  constructor() { }

  ngOnInit(): void {
  }
  getValue(unit: number) {
    this.value = unit;
  }
}
