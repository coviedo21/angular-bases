import { Component } from "@angular/core";

@Component({
    selector:'app-counter',
    template:`
    <h3>El contador es: {{contador}}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resetear(10)">Reset</button>
    `,
})
export class CounterComponent{
        public prueba:string = 'Mi primera base de angular';
        public counter:number = 10;
        public contador:number = 0;
      
        increaseBy(value:number){
          //this.contador = this.contador+1;
          this.contador = this.contador+value;  
        }
      
        resetear(value:number){
          this.contador = value;
        }
}