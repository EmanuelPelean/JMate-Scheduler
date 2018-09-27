import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {EmployeeModel} from '../../shared/models/employee.model';
import {EmployeeService} from '../../shared/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Observable<EmployeeModel[]>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteEmployees() {
    this.employeeService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

}

