import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from '../../shared/models/employee.model';
import {EmployeeService} from '../../shared/services/employee.service';

@Component({
  selector: 'app-search-employees',
  templateUrl: './search-employees.component.html',
  styleUrls: ['./search-employees.component.css']
})
export class SearchEmployeesComponent implements OnInit {

  last_name: string;
  employees: EmployeeModel[];

  constructor(private dataService: EmployeeService) { }

  ngOnInit() {
    this.last_name = '';
  }

  private searchEmployees() {
    this.dataService.getEmployeesByLastName(this.last_name)
      .subscribe(employees => this.employees = employees);
  }

  onSubmit() {
    this.searchEmployees();
  }
}
