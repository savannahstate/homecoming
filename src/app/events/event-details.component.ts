import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IEvent } from '../models/event';
import { EventsService } from '../services/events.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private eventService: EventsService) { }
  _event: IEvent;
  bannerImage: String;
  
  ngOnInit() {
    this.banner = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.eventService.getEventByName(params.get('name'))
        )
    );
  }

  set banner(value) {
    value.subscribe(e => { this._event = e }, (err) => { console.log('s') }, () => {  });
    this.getBannerImage();
  }

  getBannerImage() {
    if (this._event.images != undefined) {
      if (this._event.images.length > 0) {
        this.bannerImage = this._event.images.find(i => i.type === 'banner').src;
      }
    }
  }
}
