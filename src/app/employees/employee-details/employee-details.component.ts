import {Component, Input, OnInit} from '@angular/core';
import {EmployeeModel} from '../../shared/models/employee.model';
import {EmployeeService} from '../../shared/services/employee.service';
import {EmployeesListComponent} from '../employees-list/employees-list.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: EmployeeModel;

  constructor(private  employeeService: EmployeeService, private listComponent: EmployeesListComponent) { }

  ngOnInit() {
  }

}
