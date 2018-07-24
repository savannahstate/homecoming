import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './events/event-details.component';
import { EventRouteGuard } from './events/eventRouteGuard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent, data: {title: 'Home'}},
  { path: 'coronation', pathMatch: 'full', redirectTo: 'event/Coronation%20Ceremony' },
  { path: 'football', pathMatch: 'full', redirectTo: 'event/Homecoming%20Football%20Game' },
  { path: 'parade', pathMatch: 'full', redirectTo: 'event/Homecoming%20Parade' },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  { path: 'golf', pathMatch: 'full', redirectTo: 'event/Scholarship%20Golf%20Scramble' },
  { path: 'event/:name', component: EventDetailsComponent, canActivate: [EventRouteGuard] },
  { path: 'events', component: EventsComponent, data: { title: 'Events' } },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EventRouteGuard],
  declarations: []
})
export class AppRoutingModule { }
