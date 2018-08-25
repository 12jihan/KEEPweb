import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/fontawesome-svg-core';
import { AppRoutingModule } from './routes/app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoverComponent } from './components/home/cover/cover.component';
import { SectionsComponent } from './components/home/sections/sections.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { DonateComponent } from './components/donate/donate.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';

export const firebaseConfig = environment.firebaseConfig;
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoverComponent,
    SectionsComponent,
    PageNotFoundComponent,
    AboutComponent,
    DonateComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
