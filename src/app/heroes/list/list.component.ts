import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 public heroes: string[] = ['Spider-Man','Iron Man','Thor','Black Widow', 'Hulk',

    // { nombre: 'Spider-Man', poder: 'Sentido arácnido', equipo: 'Vengadores' },
    // { nombre: 'Iron Man', poder: 'Armadura avanzada', equipo: 'Vengadores' },
    // { nombre: 'Thor', poder: 'Dios del trueno', equipo: 'Vengadores' },
    // { nombre: 'Hulk', poder: 'Fuerza sobrehumana', equipo: 'Vengadores' },
    // { nombre: 'Black Widow', poder: 'Agente secreto', equipo: 'Vengadores' },
  ];

  public deletedHero?: string = '';
  removeLastHero():void {
   this.deletedHero =  this.heroes.pop();

  }
}
