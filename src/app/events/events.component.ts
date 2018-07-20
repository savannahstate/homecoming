import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { IEvent } from '../models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
events: IEvent[];
  constructor(private eventService: EventsService) { }
  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {this.events = events; }, (err) => {}, () => {});
  }
}
