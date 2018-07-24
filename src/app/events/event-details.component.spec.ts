import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsComponent } from './event-details.component';
import { DebugElement } from '@angular/core';
import { EventsService } from '../services/events.service';
import { AgmCoreModule } from '@agm/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Observable,of } from 'rxjs';

describe('EventDetailsComponent', () => {
  let fixture: ComponentFixture<EventDetailsComponent>, component: EventDetailsComponent, debugEl: DebugElement;
  let event = {
    "eventId": 1,
    "name": "Homecoming Parade",
    "dateStart": new Date("2018-10-27T09:00:00-04:00"),
    "description": "Annual SSU homecoming parade through the streets of downtown Savannah.",
    "location": {
      "name": "Downtown Savannah",
      "address": "",
      "latitude": 32.0273425,
      "longitude": -81.0687014
    },
    "audience": "All",
    "prices": [
      {
        "description": "General Admission",
        "amount": 0
      }
    ],
    "addtional": "",
    "links": [
      {
        "text": "Parade Information",
        "url": "#/parade"
      }
    ],
    "images": [
      {
        "src": "https://www.savannahstate.edu/homecoming/images/parade.jpg",
        "type": "banner"
      }
    ]
  };


  beforeEach(async () => {
    let mockEventService = {
      getEventByName: () => of(event)
    };

    TestBed.configureTestingModule({
      imports: [AgmCoreModule.forRoot({ apiKey: 'AIzaSyCb9ARobCKWam-pHhh3pBCyekvDlNMtQis' }), RouterTestingModule],
      declarations: [EventDetailsComponent],
      providers: [{ provide: EventsService, useValue: mockEventService }]
    });

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
  });

  describe('Display Event', () => {
    it('should display correct event', () => {
      component._event$ = of(event);
      fixture.detectChanges();
      expect(debugEl.query(By.css('h1')).nativeElement.textContent).toContain('Homecoming Parade');
      expect(debugEl.query(By.css('.title h3')).nativeElement.textContent).toContain('SAT');
      expect(debugEl.query(By.css('.content h3')).nativeElement.textContent).toContain('10/27');
      expect(debugEl.query(By.css('.content h4')).nativeElement.textContent).toContain('9:00 AM');
    });
  });
});
