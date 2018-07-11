import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../models/event';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private eventService: EventsService) { }
  event: IEvent;
  bannerImage: String;
  eventError: boolean;
  ngOnInit() {
    this.eventError = false;
    this.eventService.getEventByName(this.route.snapshot.params['name']).subscribe(
      event => { this.event = event; },
      (err) => { this.eventError = true; },
      () => {
        this.processData();
      });
  }

  processData() {
    if (this.event !== undefined) {
      this.eventError = false;
      if (this.event.images !== undefined) {
        if (this.event.images.length > 0) {
          this.event.images.forEach((image) => {
            if (image.type.toLowerCase() === 'banner') {
              this.bannerImage = image.src;
            }
          });
        }
      }
    } else {
      this.eventError = true;
    }
  }
}
