import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola desde el Counter Component</h1>
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(1)" class="btn btn-primary rounded-5 border-dark mx-2">+1</button>
    <button (click)="reset()" class="btn btn-danger rounded-1 border-dark mx-2">Reset</button>
    <button (click)="increaseBy(-1)" class="btn btn-primary rounded-5 border-dark mx-2">-1</button>
  `,
})
export class CounterComponent {
  title = 'Primer Proyecto de Angular';
  counter = 15;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset() {
    this.counter = 15;
  }
}

//a-component
//Verificar video 53
