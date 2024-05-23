import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
