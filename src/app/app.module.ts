import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CoronationComponent } from './coronation/coronation.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { EventsViewComponent } from './events-view/events-view.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventsService } from './services/events.service';
import { AgmCoreModule } from '@agm/core';

export function EventServiceFactory(provider: EventsService) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderNavComponent,
    JumbotronComponent,
    FooterContentComponent,
    HomeComponent,
    CoronationComponent,
    ContactComponent,
    EventsComponent,
    EventsViewComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCb9ARobCKWam-pHhh3pBCyekvDlNMtQis' })
  ],
  providers: [ EventsService,
    { provide: APP_INITIALIZER, useFactory: EventServiceFactory, deps: [EventsService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
