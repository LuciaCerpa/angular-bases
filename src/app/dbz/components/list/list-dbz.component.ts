import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector:'app-list-dbz-component',
  templateUrl:'./list-dbz.component.html',
  styleUrl: './list-dbz.component.css'
})
export class ListDbzComponent{

  @Input()
   public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
   }]

  //  @Output()
  //  public characterToRemove: EventEmitter<number> = new EventEmitter();

  // removeCharacter(id:number):void{
  //   this.characterToRemove.emit(id);
  // }

  @Output()
  public characterToRemove: EventEmitter<string> = new EventEmitter();


  removeCharacter(id?:string):void{
    if(!id) return;
    this.characterToRemove.emit(id);
  }

  }
