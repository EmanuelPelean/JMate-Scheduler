import {Injectable, OnInit} from '@angular/core';
import {EmployeeModel} from '../models/employee.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService implements OnInit {

  private employees: EmployeeModel [] = [{
    'firstName': 'Thomas',
    'middleName': 'Mike',
    'lastName': 'Smith',
    'roles': ['MA', 'CM']
  }, {
    'firstName': 'Sam',
    'middleName': 'Henry',
    'lastName': 'Slop',
    'roles': ['FD']
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
