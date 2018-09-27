import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {EmployeesListComponent} from './employees/employees-list/employees-list.component';
import {CreateEmployeeComponent} from './employees/create-employee/create-employee.component';
import {SearchEmployeesComponent} from './employees/search-employees/search-employees.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'employee', component: EmployeesListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'findbylastname', component: SearchEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
