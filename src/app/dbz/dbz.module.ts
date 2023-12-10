import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AddCharacterComponent } from './components/addCharacter/add-character.component';
import { ListComponent } from './components/list/list.component';
import { MainPagesComponent } from './pages/main-pages.component';

@NgModule({
  declarations: [MainPagesComponent, ListComponent, AddCharacterComponent],
  exports: [MainPagesComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
