import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileDashboardComponent } from './user-profile-dashboard/user-profile-dashboard.component';
import {FullCalendarModule} from 'ng-fullcalendar';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileDashboardComponent,
    FullCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
