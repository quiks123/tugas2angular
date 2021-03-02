import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DetailComponent } from './detail/detail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, RouterModule.forRoute(ROUTES)  ],
  declarations: [ AppComponent, HelloComponent, DetailComponent, FavoriteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
