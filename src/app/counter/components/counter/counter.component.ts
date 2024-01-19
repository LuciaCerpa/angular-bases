import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})
export class CounterComponent{
  public counter: number = 10;

  // esta fue mi solucion pero la solucion de el fue manejar el incremento y decremento con una sola funcion
  // increaseByOne():void {
  //   this.counter++
  // }

  // decreaseBy(value:number):void{
  //   this.counter -= value
  // }

  increaseBy(value:number):void{
       this.counter += value
    }

    resetCounter():void{
      this.counter = 10;
    }
}
