import { NgModule } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  exports: [
    CharacterComponent,
    ListComponent,
  ],
  declarations: [
    CharacterComponent,
    ListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CharactersModule { }
