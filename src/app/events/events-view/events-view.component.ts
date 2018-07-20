import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../../models/event';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.css']
})
export class EventsViewComponent implements OnInit {
  @Input()
  event: IEvent;
  ngOnInit() {
  }
}
