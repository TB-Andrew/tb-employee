import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { EmployeeService } from "./services/employee.service";
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {EmployeeComponent} from "./components/employee/employee.component";
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
