import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routes/app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoverComponent } from './components/home/cover/cover.component';
import { SectionsComponent } from './components/home/sections/sections.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { DonateComponent } from './components/donate/donate.component';
import { ContactComponent } from './components/contact/contact.component';

export const firebaseConfig = environment.firebaseConfig;

import { environment } from '../environments/environment';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontawesomeService } from './fontawesome.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoverComponent,
    SectionsComponent,
    PageNotFoundComponent,
    AboutComponent,
    DonateComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    FontawesomeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
