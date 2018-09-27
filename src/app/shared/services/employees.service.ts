import {Injectable, OnInit} from '@angular/core';
import {EmployeeModel} from '../models/employee.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService implements OnInit {

  private employees: EmployeeModel [] = [{
    'id': 23,
    'first_name': 'Thomas',
    'last_name': 'Smith',
    'role': 'MA',
    'active': true
  }, {
    'id': 29,
    'first_name': 'Sam',
    'last_name': 'Slop',
    'role': 'FD',
    'active': true
  }];

  employeesChanged = new Subject<EmployeeModel[]>();


  constructor() { }

  ngOnInit() {

  }

  getEmployees() {
    return this.employees.slice();
  }

  refreshEmployees() {
    this.employeesChanged.next(this.employees.slice());
  }
}
