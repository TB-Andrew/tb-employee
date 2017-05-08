import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../../components/home/home.component";
import {EmployeeViewComponent} from "../../components/employee-view/employee-view.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'employee-view/:id',
    component: EmployeeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{ }
