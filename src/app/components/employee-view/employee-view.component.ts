import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../models/employee";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) { }

  public Employee: Employee;

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsP => {
      const employee_id = +paramsP['id'];

      this.employeeService.GetEmployeeByID(employee_id).subscribe(employeeP => {
        this.Employee = employeeP;
      });
    });
  }

  public AlertMyName(employeeP: Employee)
  {
    alert(employeeP.FirstName);
  }
}
