import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from '../../shared/models/employee.model';
import {EmployeeService} from '../../shared/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: EmployeeModel = new EmployeeModel();
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new EmployeeModel();
  }

  save() {
    this.employeeService.createEmployee(this.employee).subscribe(
      data => console.log(data), error => console.log(error));
    this.employee = new EmployeeModel();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
