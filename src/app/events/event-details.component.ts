import { Component, OnInit } from '@angular/core';
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
  _event$: Observable<IEvent>;
  bannerImage: String;
  
  ngOnInit() {

    this._event$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.eventService.getEventByName(params.get('name'))
        )
    );

    //this.eventService.getEventByName(this.route.snapshot.params['name']).subscribe(
    //  event => { this._event = event; },
    //  (err) => { this.eventError = true; },
    //  () => {
    //    this.processData();
    //  });
  }
  
  //processData() {
  //  if (this._event !== undefined) {
  //    this.eventError = false;
  //    if (this._event.images !== undefined) {
  //      if (this._event.images.length > 0) {
  //        this._event.images.forEach((image) => {
  //          if (image.type.toLowerCase() === 'banner') {
  //            this.bannerImage = image.src;
  //          }
  //        });
  //      }
  //    }
  //  } else {
  //    this.eventError = true;
  //  }
  //}
}
