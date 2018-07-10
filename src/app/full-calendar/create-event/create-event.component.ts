import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScheduleEventsService} from '../../shared/services/schedule-events.service';
import {Subscription} from 'rxjs';
import {s} from '@angular/core/src/render3';
import {CalendarEvent} from 'angular-calendar';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  view: string;
  events: CalendarEvent[];
  eventsSub: Subscription;
  daySelectedSub: Subscription;
  dateSelected = new Date();
  startTime = new Date();
  endTime = new Date();
  eventTitle: string;
  eventSecondaryColor: string;

  constructor(private eService: ScheduleEventsService) { }

  ngOnInit() {
    this.eService.currentViewSelected.subscribe((currentView: string) => {
      this.view = currentView;
    });
    this.events = this.eService.getEvents();
    this.eventsSub = this.eService.scheduleChanged.subscribe((events: CalendarEvent[]) => {
      this.events = events;
    });
    this.daySelectedSub = this.eService.dateClicked.subscribe((dateChosen: Date) => {
      this.dateSelected = dateChosen;
    });

  }

  onRefreshEvents() {
    this.eService.refreshEvents();
  }

  onAddEvent() {
    this.eService.addEvent(this.dateSelected);
  }

  onDeleteEvent(i: number) {
    this.eService.deleteEvent(i);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.eventsSub.unsubscribe();
    this.daySelectedSub.unsubscribe();
  }

}

