import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent {
  public name: string = 'Gabriel Van helsing';
  public age = 191;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  characterDescription(): string {
    return `${this.name} - ${this.age} years`;
  }

  changeCharacterName(): void {
    this.name = 'Adrian Fahrenheit Tepes';
  }

  changeCharacterAge() {
    this.age = 300;
  }

  resetCharacter(): void {
    this.name = 'Gabriel Van Helsing';
    this.age = 191;
  }
}
