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
  url = `../assets/js/events.json`;
  constructor(private http: HttpClient, @Optional() events?: IEvent[]) {
    if (events !== null) {
      this._events = events;
    }
  }
  load() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).pipe(map(res => res)).subscribe(response => {
        this._events = <IEvent[]>response;
        resolve(true);
      }, (err) => { reject(true); });
    });
  }
  getEvents(): Observable<IEvent[]> {
    return of(this._events);
  }
  getEventByName(name: string): Observable<IEvent> {
    return of(this._events.find(ev => ev.name === name));
  }
}
