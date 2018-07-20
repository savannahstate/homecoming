import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsViewComponent } from './events-view.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('EventsViewComponent', () => {
  let fixture: ComponentFixture<EventsViewComponent>, component: EventsViewComponent, debugEl: DebugElement;
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EventsViewComponent],
      providers: []
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsViewComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
  });

  describe('Event view', () => {

    let _event = {
      eventId: 1,
      name: "Homecoming Parade",
      dateStart: new Date("2018-10-27T09:00:00-04:00"),
      description: "Annual SSU homecoming parade through the streets of downtown Savannah.",
      location: {
        name: "Downtown Savannah",
        address: "",
        latitude: 32.0273425,
        longitude: -81.0687014
      },
      audience: "All",
      prices: [
        {
          description: "General Admission",
          amount: 0
        }
      ],
      addtional: "",
      links: [
        {
          text: "Parade Information",
          url: "#/parade"
        }
      ],
      images: [
        {
          src: "https://www.savannahstate.edu/homecoming/images/parade.jpg",
          type: "banner"
        }
      ]
    };

    it('should display an event', () => {
      component.event = _event;
      fixture.detectChanges();
      expect(debugEl.query(By.css('.event')).nativeElement.textContent).toContain('Homecoming');
    });
  });
});
