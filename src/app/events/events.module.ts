import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { EventsComponent } from './events.component';
import { EventDetailsComponent } from './event-details.component'
@NgModule({
  imports: [
    RouterModule, SharedModule
  ],
  exports: [],
  declarations: [EventsComponent, EventDetailsComponent],
  providers: []
})
export class EventsModule { }
