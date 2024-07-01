import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  operation = '';
  splitOperation:string[] = [];
  tempNumber = 0;
  occupied = false;
  numInput(number: string) { //Inputs the number to the paragraph tag
    this.operation += number
  }
  clear() { //When c is pressed, the paragraph tag is cleared
    this.operation = '';
  }
  // multiply(number: string) {
  //   if (!this.occupied) {
  //     this.tempNumber = number as unknown as number;
  //     this.occupied = true;
  //     this.clear()
  //   } else {
  //     this.result = this.tempNumber * (number as unknown as number);
  //     this.inputNumber = (this.result as unknown as string);
  //   }
  // }
  // operationComplete() {
  //   this.result = this.tempNumber ??? (number as unknown as number)
  // }
  operationComplete(operation: string) {
    this.splitOperation = operation.split(/([+\-/*])/);
    console.log(this.splitOperation);
    this.operation = eval(this.splitOperation.join(' '));
  }
} 
