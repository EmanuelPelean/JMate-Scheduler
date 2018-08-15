import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileDashboardComponent } from './user-profile-dashboard/user-profile-dashboard.component';
import {FullCalendarComponent} from './full-calendar/full-calendar.component';
import {CalendarModule} from 'angular-calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'flatpickr/dist/flatpickr.css';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import {ScheduleEventsService} from './shared/services/schedule-events.service';
import { CreateEventComponent } from './full-calendar/create-event/create-event.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import { AddStaffComponent } from './register/add-staff/add-staff.component';
import {LoginService} from './shared/services/login.service';
import {EmployeesService} from './shared/services/employees.service';
import { ScheduleHeaderComponent } from './full-calendar/schedule-header/schedule-header.component';
import {NgbAccordion, NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import {SidebarModule} from 'ng-sidebar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileDashboardComponent,
    FullCalendarComponent,
    CreateEventComponent,
    DropdownDirective,
    AddStaffComponent,
    ScheduleHeaderComponent,
  ],
  imports: [
    BrowserModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    NgbAccordionModule,
    SidebarModule.forRoot()
  ],
  providers: [ScheduleEventsService, LoginService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
