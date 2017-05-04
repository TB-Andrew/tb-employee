import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { Subscription } from "rxjs/Subscription";
import { Employee } from "../../models/employee";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy
{
  constructor(private employeeService: EmployeeService)
  { }

  public Employees: Employee[];

  private m_EmployeeSubscription: Subscription;

  public ngOnInit(): void
  {
    // Fetch our employees from a mock web service
    this.employeeService.GetEmployees().subscribe((employeesP) => {
      this.Employees = employeesP;
    })
  }

  public ngOnDestroy(): void
  {
    this.m_EmployeeSubscription.unsubscribe();
  }

  public AlertHiddenAbility(employeeP: Employee)
  {
    alert(employeeP.FirstName);
  }
}
