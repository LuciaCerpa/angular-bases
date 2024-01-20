import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-component',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  //constructor(public dbzService: DbzService) {}
  constructor(private dbzService: DbzService) {}

  get characters(){
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id:string)
:void
{
  this.dbzService.deleteCharacterById(id)
}

onNewCharacter(character:Character):void{
  this.dbzService.onNewCharacter(character)
}

  // public characters: Character[] = [{
  //     name: 'Krillin',
  //     power: 1000
  //   },
  //   {
  //     name: 'Goku',
  //     power: 9500
  //   },
  // {
  //   name: 'Vegeta',
  //   power: 7500
  // }];


  // onNewCharacter(character: Character):void{
  //   console.log(character);

  //   this.characters.unshift(character)
  // }

  // onRemoveCharacter(id:number){
  //   // this.characters = this.characters.filter(item => item.name !== this.characters[id].name)
  //   this.characters.splice(id, 1)
  //   console.log(this.characters[id]);

  // }
}
