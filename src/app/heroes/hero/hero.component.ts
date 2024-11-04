import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  //Property

  public name: string = 'iroman';
  public age:  number = 45;
  
  //? get se ve como una propiedad, pero  realmente es un metodo 
  get capitalizedName(): string{
    return this.name.toUpperCase()
  }

  // Metodo, va a juntar el name + age
  getHeroDescription():string{
    
    return `${this.name} - age: ${this.age}`
  }

  changeHero():void{
    this.name = 'SpiderMan';
    
    return 
   
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element =>{
    //   element.innerHTML = '<h1>Desde Angulaaaar</h1>'; 
    // });
  }
}
