import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DetailComponent } from './detail/detail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
  {path : 'detail', component : DetailComponent},
  {path : 'favorite', component : FavoriteComponent},
  {path : 'detail/:judul', component : DetailComponent}

]

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, RouterModule.forRoute(ROUTES)  ],
  declarations: [ AppComponent, HelloComponent, DetailComponent, FavoriteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
