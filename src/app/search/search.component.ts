import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { IEvent } from '../models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm;
  searchResults: IEvent[];
  constructor(private eventService: EventsService, private router: Router) { }

  ngOnInit() {
  }

  search(formValues): void {
    this.eventService.search(formValues.searchTerm.trim()).subscribe(results => { this.searchResults = results },
      (err) => { },
      () => { });
  }

  navigate(eventName: string): void {
    this.reset();
    this.router.navigate(['/event/' + eventName]);
  }


  reset(): void {
    this.searchResults.length = 0;
  }
}
