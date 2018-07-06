import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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
    EventsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
