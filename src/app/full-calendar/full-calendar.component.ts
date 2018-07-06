import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription} from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { CalendarEvent } from 'angular-calendar';
import {ScheduleEventsService} from '../shared/services/schedule-events.service';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullCalendarComponent implements OnInit, OnDestroy {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[];
  subscription: Subscription;
  clickedDate: Date;

  constructor(private modal: NgbModal,
              private eServices: ScheduleEventsService) {}

  ngOnInit() {
    this.events = this.eServices.getEvents();
    this.subscription = this.eServices.scheduleChanged.subscribe((events: CalendarEvent[]) => {
      this.events = events;
      this.viewDate = this.eServices.viewDate;
    });
  }

  onRefreshEvents() {
    this.eServices.refreshEvents();
  }

  onAddEvent() {
    this.eServices.addEvent();
  }

  onDeleteEvent(i: number) {
    this.eServices.deleteEvent(i);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
