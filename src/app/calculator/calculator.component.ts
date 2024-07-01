import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  selectedNumber = 'null';
  inputReceive(inputInteger: string) {
    this.selectedNumber = inputInteger;
  }
} 
