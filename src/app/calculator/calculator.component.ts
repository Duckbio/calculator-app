import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  operation = ''; //This is the content of the paragraph tag
  splitOperation:string[] = []; //This will split the operation into computable sections
  allPossibleOperators = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.']; //This is used to validate keyboard inputs
  numInput(opeartor: string) { //Inputs the operator/number to the paragraph tag
    this.operation += opeartor
  }
  @HostListener('window:keydown', ['$event']) //This checks for keyboard input across the whole page
  handleKeyDown(event: KeyboardEvent) { //Handles any keyboard input
    switch(true) { //Switch statement to handle different types of input
      case event.key == 'Backspace':
        this.operation = this.operation.slice(0, -1); // Deletes the last inputted character
        break;
      case event.key == 'Enter': 
        this.operationComplete(this.operation); //Performs the operation
        break;
      case event.key == 'c': //Clears the operation
        this.clear();
        break;
      case this.allPossibleOperators.includes(event.key): //Handles input of any operator/number and validates it
        this.numInput(event.key);
        break;
    }
  }
  clear() { //When c is pressed, the paragraph tag and operation is cleared
    this.operation = '';
  }
  operationComplete(operation: string) { //The operation is performed
    this.splitOperation = operation.split(/([+\-/*])/); //Splits the operation into computable sections
    this.operation = eval(this.splitOperation.join(' ')); //Evaluates the operation and returns it
  }
} 
