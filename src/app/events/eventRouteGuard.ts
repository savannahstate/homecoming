import { Router,ActivatedRouteSnapshot,CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventsService } from '../services/events.service';

@Injectable()
export class EventRouteGuard implements CanActivate{
  constructor(private eventService: EventsService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const exists = this.eventService.eventExists(route.params['name']);
    if (!exists) {
      this.router.navigate(['/error']);
    }
    return exists;
  }
}
