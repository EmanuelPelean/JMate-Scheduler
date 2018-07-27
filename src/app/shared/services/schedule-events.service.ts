import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent} from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import {EmployeeModel} from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class ScheduleEventsService {

  constructor() { }
  currentViewSelected = new Subject<string>();
  scheduleChanged = new Subject<CalendarEvent[]>();
  dateClicked = new Subject<Date>();
  viewDate = new Subject<Date>();
  activeDayIsOpen = true;


  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.scheduleEvents = this.scheduleEvents.filter(iEvent => iEvent !== event);
        console.log('Event deleted', event);
        this.refreshEvents();
      }
    }
  ];

  colors = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };


  private scheduleEvents = [
    {
      start: addHours(startOfDay(new Date()), 12),
      end: new Date(),
      title: 'Drake (MA)',
      color: this.colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 12),
      end: new Date(),
      title: 'Sam (MA)',
      color: this.colors.blue,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 10),
      end: new Date(),
      title: 'Joe (MA)',
      color: this.colors.red,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 10),
      end: new Date(),
      title: 'Dana (MA)',
      color: this.colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 14),
      end: new Date(),
      title: 'Manu (MA)',
      color: this.colors.blue,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  viewDateChanged(dateSelected: Date) {
    this.viewDate.next(dateSelected);
  }

  viewSelected(view: string) {
    this.currentViewSelected.next(view);
  }

  getEvents() {
    return this.scheduleEvents.slice();
  }

  // addEvent(endDate: Date): void {
  //   this.scheduleEvents.push({
  //     title: 'New event',
  //     start: startOfDay(new Date()),
  //     end: endOfDay(new Date()),
  //     color: this.colors.red,
  //     draggable: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //   });
  //   this.refreshEvents();
  // }

  addEvent(start: Date, end: Date, title: string, color: {'primary': string, 'secondary': string}) {
    this.scheduleEvents.push({
      start: addHours(startOfDay(start), 2),
      end: end,
      title: title,
      color: color,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    });
    this.refreshEvents();
  }

  deleteEvent(index: number) {
    this.scheduleEvents.splice(index, 1);
    this.refreshEvents();
  }

  // dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
  //   if (isSameMonth(date, this.viewDate)) {
  //     if (
  //       (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
  //       events.length === 0
  //     ) {
  //       this.activeDayIsOpen = false;
  //     } else {
  //       this.activeDayIsOpen = true;
  //       this.viewDate = date;
  //     }
  //   }
  // }

  refreshEvents() {
    this.scheduleChanged.next(this.scheduleEvents.slice());
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent) {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refreshEvents();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }
}
