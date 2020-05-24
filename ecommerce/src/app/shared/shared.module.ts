import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {FormsModule} from '@angular/forms'

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { CardsComponent } from './components/cards/cards.component';


/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
    js: () => import('highlight.js/lib/languages/javascript'),
  };
}

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, TableComponent, CardsComponent],
  imports: [
    CommonModule, RouterModule, HighlightModule, FormsModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, TableComponent, CardsComponent],
  providers:[
    {  
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
     languages: getHighlightLanguages()
   }
 }]
})
export class SharedModule { }
