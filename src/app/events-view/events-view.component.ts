import { Http, Response } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';
import { toDate } from '@angular/common/src/i18n/format_date';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.css']
})
export class EventsViewComponent implements OnInit {

  @Input() searchType: string;
  @Input() searchTerm: string;

  public searchResults: Array<Object> = new Array<Object>();
  public resultsFilled: Boolean = false;

  public todaysDate: Date = new Date();

  constructor(private http:Http) { }

  ngOnInit() {
    this.searchAndSetEvents(this.searchType,this.searchTerm);
  }

  searchAndSetEvents(eventsSearchType:string,searchTerm:string):any{
    const jsonUrl = './../../assets/js/events.json';
    const defaultError = {name:"No events found"};
    const currentError = {name:"No current events to display"};
    const searchError = {name:"No events found, try again"};

    this.http.get(jsonUrl).toPromise().then(results =>{
      
      switch(eventsSearchType){
        case "all":
          this.searchResults = results.json();
        break;
        case "current":
            results.json().forEach((key) => {
                let eventDate = new Date(key.date);
                if(eventDate >= this.todaysDate){
                  this.searchResults.push(key);
                }
            })
            if(this.searchResults.length == 0){
                  this.searchResults.push(currentError);
                }
          break;
        /*case "dateRange":
          this.searchResults = results.json();
        break;*/
        case "search":
          const regex = new RegExp(".*" + searchTerm + ".*","gi");
            results.json().forEach((key) =>{
                if(regex.test(key.name) || regex.test(key.description) || regex.test(key.location) || regex.test(key.audience) || regex.test(key.price)){
                  this.searchResults.push(key);
                };
            })
            if(this.searchResults.length == 0){
                this.searchResults.push(searchError);
              };
          break;
        default:
          //display no results message
          this.searchResults.push(defaultError);
          console.log('default triggered, one of the parameters may be incorrect');
      };
      
      this.resultsFilled = true;

    }).catch(error => console.log(error));
  };

}
