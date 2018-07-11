import { TestBed, inject } from '@angular/core/testing';
import { EventsService } from './events.service';
import { IEvent } from '../models/event';
import { Observable, of } from 'rxjs';

describe('EventsService', () => {
  let eventService: EventsService;
  let mockHttp;
  let _events: IEvent[];
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    _events = [{
      eventId: 1,
      name: 'Test Event',
      dateStart: new Date('1/1/2019'),
      dateEnd: new Date('1/1/2019'),
      description: 'This is a test description'
    }, {
      eventId: 2,
      name: 'Test Event 2',
      dateStart: new Date('1/1/2019'),
      dateEnd: new Date('1/1/2019'),
      description: 'This is a test description'
    }, {
      eventId: 3,
      name: 'Test Event 3',
      dateStart: new Date('1/1/2019'),
      dateEnd: new Date('1/1/2019'),
      description: 'This is a test description'
    }];
    eventService = new EventsService(mockHttp, _events);
  });

  describe('getEvents', () => {
    it('should get all events', () => {
      mockHttp.get.and.returnValue(of(true));
      eventService.getEvents().subscribe(evednts => {expect(evednts.length).toBe(3); });
    });
  });

  describe('getEventByName', () => {
    it('should get event by name', () => {
      mockHttp.get.and.returnValue(of(true));
      eventService.getEventByName('Test Event').subscribe(event => {expect(event.eventId).toBe(1); });
    });
  });
});


