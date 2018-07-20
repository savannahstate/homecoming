import { Component, OnInit } from '@angular/core';
import { IEvent } from '../models/event';
import { EventsService } from '../services/events.service';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: IEvent[];
  eventTotal: number;
  constructor(private eventServices: EventsService, private meta: Meta) {
    meta.addTags([
      { name: 'theme-color', content: '#d43900' },
      { name: 'description', content: '#d43900' },
      { name: 'keywords', content: 'homecoming, events' },
      { name: 'author', content: 'Savannah State University' },
      { property: 'fb:app_id', content: '356883447812826' },
      { property: 'og:site_name', content: 'Savannah State University' },
      { property: 'og:title', content: 'Savannah State University Homecoming' },
      { property: 'og:description', content: '#d43900' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'http://www.savannahstate.edu/homecoming' },
      { property: 'og:image', content: '#d43900' },

      { property: 'twitter:card:', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@savannahstate' },
      { property: 'twitter:title', content: 'Savannah State University' },
      { property: 'twitter:description', content: '#d43900' },
      { property: 'twitter:image', content: '#d43900' },
    ]);
  }


 
  //      <meta name="theme-color" content = "#d43900" >
  //        <title>Savannah State University < /title>
  //          < meta name = "description" content = "The oldest institution of higher learning in Savannah and the oldest public HBCU in Georgia. The 201-acre campus offers 30 undergraduate & 6 graduate programs" >
  //            <meta name="keywords" content = "student,savannah,campus,ssu,hbcu" >
  //              <meta name="author" content = "Savannah State University" >

  //                <!--Facebook -->
  //                  <meta property="fb:app_id" content = "356883447812826" />
  //                    <!--Facebook, LinkedIn, Pinterest Open Graph data-- >
  //                      <meta property="og:site_name" content = "Savannah State University" />
  //                        <meta property="og:title" content = "Savannah State University" />
  //                          <meta property="og:description" content = "The oldest institution of higher learning in Savannah and the oldest public HBCU in Georgia." />
  //                            <meta property="og:type" content = "website" />
  //                              <meta property="og:url" content = "http://www.savannahstate.edu" />
  //                                <meta property="og:image" content = "http://www.savannahstate.edu/places/images/hill-hall.jpg" />



  //                                  <!--Twitter data-- >
  //                                    <meta name="twitter:card" content = "summary_large_image" />
  //                                      <meta name="twitter:site" content = "@savannahstate" />
  //                                        <meta name="twitter:title" content = "Savannah State University" />
  //                                          <meta name="twitter:description" content = "The oldest institution of higher learning in Savannah and the oldest public HBCU in Georgia." />
  //                                            <meta name="twitter:image" content = "http://www.savannahstate.edu/places/images/hill-hall.jpg" />




  ngOnInit() {
    this.eventTotal = this.eventServices.getTotalEvents();
    this.eventServices.getEvents(4).subscribe(events => {this.events = events; });
  }
}
