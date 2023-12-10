import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DBZService {
  public characters: Character[] = [
    { id: crypto.randomUUID(), name: 'gokú', power: 10_000 },
    { id: crypto.randomUUID(), name: 'vegeta', power: 8_000 },
    { id: crypto.randomUUID(), name: 'krillin', power: 4_000 },
  ];

  public addCharacter(character: Character): void {
    this.characters.push({ ...character, id: crypto.randomUUID() });
  }

  public deleteCharacterById(id: string): Character[] {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
    return this.characters;
  }
}
