import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


import { EventsService } from './services/events.service';

import { ErrorComponent } from './error/error.component';
import { SearchComponent } from './search/search.component';
import { EventRouteGuard } from './events/eventRouteGuard';
import { EventsModule } from './events/events.module';
import { SharedModule } from './shared/shared.module';


export function EventServiceFactory(provider: EventsService) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterContentComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EventsModule,
    SharedModule
  ],
  providers: [EventsService, EventRouteGuard,
    { provide: APP_INITIALIZER, useFactory: EventServiceFactory, deps: [EventsService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
