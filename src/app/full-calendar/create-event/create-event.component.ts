import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScheduleEventsService} from '../../shared/services/schedule-events.service';
import {Subscription} from 'rxjs';
import {s} from '@angular/core/src/render3';
import {CalendarEvent} from 'angular-calendar';
import {EmployeesService} from '../../shared/services/employees.service';
import {EmployeeModel} from '../../shared/models/employee.model';


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
  endDateSelected: Date;
  startTime: Date;
  endTime: Date;
  eventTitle: string;
  eventSecondaryColor = '#0080ff';
  employeesSub: Subscription;
  employees: EmployeeModel[];
  selectedEmployee = 'select';
  selectedEmployeeRoles: string[];
  selectedRole = 'select';
  newColor: {'primary': string, 'secondary': string};



  constructor(private eService: ScheduleEventsService,
              private employeeService: EmployeesService) { }


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
    this.employees = this.employeeService.getEmployees();
    this.employeesSub = this.employeeService.employeesChanged.subscribe((employees: EmployeeModel[]) => {
      this.employees = employees;
    });

  }


  onSelectedRole(i: number) {
    this.selectedRole = this.selectedEmployeeRoles[i];
    this.eventTitle = this.selectedEmployee + '(' + this.selectedRole + ')' ;
  }

  onSelectedEmployee(i: number) {
    const firstName =  this.employees[i].firstName;
    const lastName = this.employees[i].lastName;
    this.selectedEmployee = firstName + ' ' + lastName;
    this.selectedEmployeeRoles = this.employees[i].roles;

  }

  onRefreshEvents() {
    this.eService.refreshEvents();
  }

  onAddNewEvent() {

    this.endDateSelected = new Date();
    this.dateSelected.setHours(this.startTime.getHours());
    this.dateSelected.setMinutes(this.startTime.getMinutes());

    this.endDateSelected.setDate(this.dateSelected.getDate());
    this.endDateSelected.setHours(this.endTime.getHours());
    this.endDateSelected.setMinutes(this.endTime.getMinutes());

    const title = this.selectedEmployee;

    this.newColor = {
      primary: '#e8e8e8',
      secondary: this.eventSecondaryColor
    };

    this.eService.addEvent(this.dateSelected, this.endDateSelected, title, this.newColor );
  }

  onDeleteEvent(i: number) {
    this.eService.deleteEvent(i);
  }

  ngOnDestroy(): void {
    this.eventsSub.unsubscribe();
    this.daySelectedSub.unsubscribe();
    this.employeesSub.unsubscribe();
  }

}

