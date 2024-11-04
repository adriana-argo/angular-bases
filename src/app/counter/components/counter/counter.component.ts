import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template:   `
        <h3>Counter: {{counter }}</h3>
        <hr>
        <button  class="mx-2 bg-blue-200 border-2 p-2 w-16 border-stone-600" (click)="increaseBy(-1)">-1</button>
        <button class="mx-2 bg-red-200 rounded-lg border-2 p-2  border-stone-600" (click)="reset()">Reset</button>
        <button class="mx-2 bg-blue-200 border-2 p-2 w-16 border-stone-600" (click)="increaseBy(1)">+1</button>
            <hr>
    `
})

export class CounterComponent  {
    
 public counter: number = 2

//  if (counter  ) return;
 //?metodo
 increaseBy(value: number):void{
    //  if(this.counter === 0 ) return;
     this.counter += value;
    }
    reset(){
  this.counter = 10;
 }
    }

    
