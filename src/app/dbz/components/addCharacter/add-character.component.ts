import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter = new EventEmitter<Character>();

  public character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  public emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { id: '', name: '', power: 0 };
  }
}
