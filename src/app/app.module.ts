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
import {NgbActiveModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import {ScheduleEventsService} from './shared/services/schedule-events.service';
import { CreateEventComponent } from './full-calendar/create-event/create-event.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import { AddStaffComponent } from './register/add-staff/add-staff.component';
import {LoginService} from './shared/services/login.service';
import {EmployeesService} from './shared/services/employees.service';
import { ScheduleHeaderComponent } from './full-calendar/schedule-header/schedule-header.component';
import {NgbAccordion, NgbAccordionModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SidebarModule} from 'ng-sidebar';
import { NavBarSideComponent } from './nav-bar-side/nav-bar-side.component';
import {ContextMenuModule} from 'ngx-contextmenu';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { ModalComponent } from './modal/modal.component';
import { AboutComponent } from './about/about.component';
import { ModalAboutComponent } from './modal-about/modal-about.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import {EmployeeService} from './shared/services/employee.service';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { SearchEmployeesComponent } from './employees/search-employees/search-employees.component';


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
    NavBarSideComponent,
    ModalComponent,
    AboutComponent,
    ModalAboutComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
    CreateEmployeeComponent,
    SearchEmployeesComponent,
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
    NgbModule.forRoot(),
    FlatpickrModule.forRoot(),
    NgbAccordionModule,
    SidebarModule.forRoot(),
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    }),
    ConfirmationPopoverModule.forRoot()
  ],
  providers: [ScheduleEventsService, LoginService, EmployeesService, NgbActiveModal, EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalAboutComponent
  ]
})
export class AppModule { }
