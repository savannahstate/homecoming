import { Http, Response } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.css']
})
export class EventsViewComponent implements OnInit {

  @Input() eventsSearch: String;

  public searchResults: Array<Object>;
  public resultsFilled: Boolean = false;

  constructor(private http:Http) { }

  ngOnInit() {
    this.searchAndSetEvents(this.eventsSearch);
    console.log(this.searchResults);
  }

  searchAndSetEvents(searchTerm:String):any{
    const jsonUrl = './../../assets/js/events.json';

    this.http.get(jsonUrl).toPromise().then(results =>{
      this.searchResults = results.json();
      this.resultsFilled = true;
      console.log(this.searchResults);
    }).catch(error => console.log(error));
  };

}
