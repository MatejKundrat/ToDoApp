 import { ThisReceiver } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newToDo = ' ';
  characters = [];

  remove(task){
    this.characters = this.characters.filter(
      item => item !== task
    )
  }
  isShort(dude: string): boolean{
    return dude.split('').length < 3;
  }
  addTask(event: Event) {
    event.preventDefault()
    if (! this.newToDo) return;
    this.characters.push(this.newToDo);
    this.newToDo = ' ';
  }
}
