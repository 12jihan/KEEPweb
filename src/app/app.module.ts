import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoverComponent } from './components/home/cover/cover.component';
import { SectionsComponent } from './components/home/sections/sections.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoverComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
