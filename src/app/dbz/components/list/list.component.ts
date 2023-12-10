import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public characterList!: Character[];

  @Output()
  public onDeleteCharacterList = new EventEmitter<string>();

  public onDeleteCharacter(id: string): void {
    let res: boolean = confirm('Deseas eliminar el personaje ? ');
    res && this.onDeleteCharacterList.emit(id);
  }
}
