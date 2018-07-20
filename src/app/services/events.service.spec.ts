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
      name: 'Birthday',
      dateStart: new Date('1/1/2019'),
      dateEnd: new Date('1/1/2019'),
      description: 'These words are different apples',
      audience: 'All'
    }, {
      eventId: 2,
      name: 'Anniversary',
      dateStart: new Date('1/1/2019'),
      dateEnd: new Date('1/1/2019'),
      description: 'Than phrases apple',
      audience: 'Alumni'
    }, {
      eventId: 3,
      name: 'Holiday',
      dateStart: new Date('1/1/2019'),
      dateEnd: new Date('1/1/2019'),
      description: 'In the current sections description bananna',
      audience: 'Students'
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
      eventService.getEventByName('Birthday').subscribe(event => {expect(event.eventId).toBe(1); });
    });
  });

  describe('search', () => {
    it('should find events by event name', () => {
      mockHttp.get.and.returnValue(of(true));
      eventService.search('day').subscribe(events => {expect(events.length).toBe(2); expect(events[0].name).toBe('Birthday'); });
    });
  });

  describe('search', () => {
    it('should find event by description', () => {
      mockHttp.get.and.returnValue(of(true));
      eventService.search('bananna').subscribe(events => { expect(events.length).toBe(1); expect(events[0].name).toBe('Holiday'); });
    });
  });

  describe('eventExists', () => {
    it('should return true', () => {
      expect(eventService.eventExists("Anniversary")).toBe(true);
    });
    it('should return false', () => {
      expect(eventService.eventExists("Nonexistent event")).toBe(false);
    });
  });
});


