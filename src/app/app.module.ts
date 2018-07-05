import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CoronationComponent } from './coronation/coronation.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderNavComponent,
    JumbotronComponent,
    FooterContentComponent,
    HomeComponent,
    CoronationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
