import { Injectable } from '@angular/core';
import { Employee } from "../models/employee";
import { Observable } from "rxjs/Observable";

@Injectable()
export class EmployeeService
{
  constructor()
  { }

  private get m_Employees(): Employee[]
  {
    return [
      {
        ID: 1,
        FirstName: 'Andrew',
        LastName: 'Reid',
        Role: 'Developer',
        PictureUrl: 'http://thinkingbig.net/media/1029/andrew.jpg'
      },
      {
        ID: 2,
        FirstName: 'Christian',
        LastName: 'Mingle',
        Role: 'Eye Candy',
        PictureUrl: 'http://thinkingbig.net/media/1016/christian.jpg'
      },
      {
        ID: 3,
        FirstName: 'Dylan',
        LastName: 'Ansems',
        Role: 'Scapegoat',
        PictureUrl: 'http://thinkingbig.net/media/1015/dylan.jpg'
      },
      {
        ID: 4,
        FirstName: 'Chuck',
        LastName: 'the Great One',
        Role: 'Voice of Thinking Big',
        PictureUrl: 'http://thinkingbig.net/media/1014/chuck.jpg'
      }
    ]
  }

  public GetEmployees(): Observable<Employee[]>
  {
    return Observable.of<Employee[]>(this.m_Employees);
  }

  public GetEmployeeByID(employeeIdP: number): Observable<Employee>
  {
    return Observable.of(this.m_Employees.find(employee => employee.ID === employeeIdP));
  }
}
