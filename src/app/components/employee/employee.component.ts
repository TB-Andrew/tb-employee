import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Employee} from "../../models/employee";

@Component({
  selector: 'tb-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent
{
  @Input('employee')
  public Employee: Employee;

  @Input('buttonText')
  public ButtonText: string;

  @Output('buttonClicked')
  public ButtonClicked = new EventEmitter<Employee>();

  public EmitClickEvent(employeeP: Employee): void
  {
    this.ButtonClicked.next(employeeP);
  }
}
