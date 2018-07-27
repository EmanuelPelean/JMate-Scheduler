import {
  Component,
  ViewChild,
  TemplateRef,
  OnInit,
  OnDestroy
} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import {CalendarEvent, CalendarEventTimesChangedEvent} from 'angular-calendar';
import {ScheduleEventsService} from '../shared/services/schedule-events.service';
import index from '@angular/cli/lib/cli';
import {EmployeesService} from '../shared/services/employees.service';
import {EmployeeModel} from '../shared/models/employee.model';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
})
export class FullCalendarComponent implements OnInit, OnDestroy {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[];
  subscription: Subscription;
  viewSub: Subscription;
  clickedDate: Date;
  employees: EmployeeModel[];
  viewDateSub: Subscription;

  constructor(private modal: NgbModal,
              private eServices: ScheduleEventsService,
              private employeeService: EmployeesService) {}

  ngOnInit() {
    this.events = this.eServices.getEvents();
    this.subscription = this.eServices.scheduleChanged.subscribe((events: CalendarEvent[]) => {
      this.events = events;
    });
    this.viewSub = this.eServices.currentViewSelected.subscribe((view: string) => {
      this.view = view;
    });
    this.viewDateSub = this.eServices.viewDate.subscribe((viewDate: Date) => {
      this.viewDate = viewDate;
    });
  }

  onDeleteEvent(i: number) {
    this.eServices.deleteEvent(i);
  }

  onDateClicked() {
    this.eServices.dateClicked.next(this.clickedDate);
  }

  // onViewSelected() {
  //   this.eServices.viewSelected(this.view);
  // }

  onEventTimesChanged(event: CalendarEventTimesChangedEvent) {
    this.eServices.eventTimesChanged(event);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onRefresh() {
    this.eServices.refreshEvents();
  }

}
