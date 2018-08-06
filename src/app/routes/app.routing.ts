import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionsComponent } from '../components/home/sections/sections.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AboutComponent } from '../components/about/about.component';
import { BlogComponent } from '../components/blog/blog.component';
import { DonateComponent } from '../components/donate/donate.component';
import { ContactComponent } from '../components/contact/contact.component';



const appRoutes: Routes = [
  { path: 'home', component: SectionsComponent },
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'donate', component: DonateComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'pagenotfound', component: PageNotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
