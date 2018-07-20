import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../models/event';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private _events: IEvent[];
  private _totalEvents = 0;
  url = `../assets/js/events.json`;
  constructor(private http: HttpClient, @Optional() events?: IEvent[]) {
    if (events !== null) {
      this._events = events;
    }
  }
  load() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).pipe(map(res => res)).subscribe(response => {
        this._events = this.removeOldEvents(<IEvent[]>response);
        resolve(true);
      }, (err) => { reject(true); });
    });
  }
  getEvents(numResults: number = 0): Observable<IEvent[]> {
    if ( numResults === 0) {
      numResults = this._events.length;
    }
    return of(this._events.slice(0, numResults));
  }
  getEventByName(name: string): Observable<IEvent> {
    return of(this._events.find(ev => ev.name === name));
  }

getTotalEvents(): number {
  return this._totalEvents;
}

  removeOldEvents(events: IEvent[]): IEvent[] {
    this._totalEvents = events.length;
    const searchResults = [];
    const todaysDate: Date = new Date();
    events.forEach((key) => {
      if (new Date(key.dateStart) >= todaysDate) {
        searchResults.push(key);
      }
    });
    return searchResults.sort((a, b) => a.dateStart > b.dateStart ? 1 : -1);
  }


  search(searchTerm: string): Observable<IEvent[]> {
    const regex = new RegExp('.*' + searchTerm + '.*', 'gi');
    let searchResults: IEvent[] = [];
    searchResults = this._events.filter(ev => ev.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) || ev.description.toLowerCase().includes(searchTerm.toLowerCase().trim()) || ev.audience.toLowerCase().includes(searchTerm.toLowerCase().trim()));
    //this._events.forEach((key) => {
      //console.log(key.name + '|' + regex.test(key.name));
      //console.log('description |' + regex.test(key.description));
      //console.log(key.audience + '|' + regex.test(key.audience));
      //if (regex.test(key.name) || regex.test(key.description) || regex.test(key.audience)) {
      //  searchResults.push(key);
      //}

      //if (regex.test(key.name)) {
      //  searchResults.push(key);
      //} else {
      //  if (regex.test(key.description)) {
      //    searchResults.push(key);
      //  } else {
      //    if (regex.test(key.audience)) {
      //      searchResults.push(key);
      //    }
      //  }
      //}
    //});
    return of(searchResults);
  }


  eventExists(name: string): boolean {
    try {
      const tempEventId = this._events.find(ev => ev.name === name).eventId;
      return true;
    } catch{
      return false;
    }
  }
}
