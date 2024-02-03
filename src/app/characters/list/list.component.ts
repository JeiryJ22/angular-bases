import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public charactersNames:string[] = ['Gabriel Van Helsing', 'Adrian Farenheit Tepes', 'Dracula Vlad Tepes','Threvor Belmont'];
  public deletedCharacter?: string;//Por default estara vacio

  deleteCharacter():void {
    this.deletedCharacter = this.charactersNames.pop();
  }

}
