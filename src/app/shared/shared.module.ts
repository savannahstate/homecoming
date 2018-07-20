import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { EventsViewComponent } from '../events/events-view/events-view.component';
@NgModule({
  imports: [
    CommonModule, RouterModule, AgmCoreModule.forRoot({ apiKey: 'AIzaSyCb9ARobCKWam-pHhh3pBCyekvDlNMtQis' })
  ],
  exports: [EventsViewComponent, CommonModule, AgmCoreModule],
  declarations: [EventsViewComponent],
  providers: []
})
export class SharedModule { }
