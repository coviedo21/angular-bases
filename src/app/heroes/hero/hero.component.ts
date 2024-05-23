import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'Ironman';
  public age:number = 45;
  get capitalizedName():string{
    return "capitalizando".toUpperCase();
  }

  getDescription():string{
    return "Esta es la descripcion";
  }

  changeHero():void{
    this.name = "Spiderman"
  }

  changeAge():void{
    this.age = 20;
  }

}
