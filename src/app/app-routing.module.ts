import { ContactComponent } from './contact/contact.component';
import { CoronationComponent } from './coronation/coronation.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent, data: {title: 'Home'}},
  { path: 'coronation', component: CoronationComponent, data: {title: 'Coronation'}},
  { path: 'contact', component: ContactComponent, data: {title: 'Contact'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }