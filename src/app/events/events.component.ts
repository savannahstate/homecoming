import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

public searchTypeVariable: String = "current";
public searchTermVariable: String = "current";

  constructor() { }

  ngOnInit() {
  }

}
