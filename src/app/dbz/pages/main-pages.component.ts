import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html',
})
export class MainPagesComponent {
  public title: string = 'personajes de dragon ball z';
  constructor(private dbzService: DBZService) {}

  public get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  public onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

  public onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
}
