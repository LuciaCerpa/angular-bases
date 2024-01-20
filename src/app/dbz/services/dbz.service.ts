import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
{
  id: uuid(),
  name: 'Vegeta',
  power: 7500
}];


onNewCharacter(character: Character):void{
  console.log(character);

  // const newCharacter: Character = {
  //   id: uuid(),
  //   name:character.name,
  //   power: character.power
  // }
  //aqui lo que esta diciendo es que genere el id y que agregue todas las propiedades del character, para fines de este ejercicio asi esta bien pero normalmente primero es el espred character y despues la propiedad que se va agregar
  const newCharacter: Character = { id: uuid(), ...character}
  this.characters.unshift(newCharacter)
}

// onRemoveCharacter(id:number){
//   // this.characters = this.characters.filter(item => item.name !== this.characters[id].name)
//   this.characters.splice(id, 1)
//   console.log(this.characters[id]);

// }

deleteCharacterById(id:string){
  this.characters = this.characters.filter(character => character.id !== id)
}
}
