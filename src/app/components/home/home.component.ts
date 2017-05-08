import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { Subscription } from "rxjs/Subscription";
import { Employee } from "../../models/employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  constructor(private employeeService: EmployeeService, private router:Router)
  { }

  public Employees: Employee[];

  private m_EmployeeSubscription: Subscription;

  public ngOnInit(): void
  {
    // Fetch our employees from a mock web service
    this.employeeService.GetEmployees().subscribe((employeesP) => {
      this.Employees = employeesP;
    });
  }

  public NavigatToEmployeePage(employeeP: Employee)
  {
    this.router.navigate(['/employee-view', employeeP.ID])
  }
}
