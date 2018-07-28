import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoverComponent } from './components/home/cover/cover.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './routers/app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
