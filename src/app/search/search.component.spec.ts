import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsService } from '../services/events.service';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let debugEl: DebugElement;
  let _events = [
    {
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
    },
    {
      "eventId": 2,
      "name": "Homecoming Football Game",
      "dateStart": new Date("2018-10-27T15:00:00-04:00"),
      "dateEnd": new Date("2018-10-27T18:00:00-04:00"),
      "description": "Watch our Savannah State University Tigers face the Norfolk State University Spartans.",
      "location": {
        "name": "T.A. Wright Stadium",
        "address": "3219 College St, Savannah, GA 31404",
        "latitude": 32.027593,
        "longitude": -81.068636
      },
      "audience": "All",
      "prices": [
        {
          "description": "General Admission",
          "amount": 20
        },
        {
          "description": "Premium Seating",
          "amount": 30
        }
      ],
      "addtional": "",
      "links": [
        {
          "text": "Game Tickets, Vending & Tailgating",
          "url": "#/football"
        },
        {
          "text": "Explore Tigers Football",
          "url": "http://ssuathletics.com/index.aspx?tab=football&path=football"
        }
      ],
      "images": [
        {
          "src": "https://www.savannahstate.edu/homecoming/images/football_smoke.jpg",
          "type": "banner"
        }
      ]
    }];
  beforeEach(async(() => {
    let mockEventService = {
      search: () => { }
    }


    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [SearchComponent],
      providers: [{ provide: EventsService, useValue: mockEventService }]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
  });

  describe('Search', () => {
    it('should find som', () => {
      component.searchResults = _events;
      fixture.detectChanges();
      expect(debugEl.queryAll(By.css('#searchResults p')).length).toBe(2);
      expect(debugEl.queryAll(By.css('#searchResults p'))[0].nativeElement.textContent).toContain('Homecoming Parade');
    });
  });
});
