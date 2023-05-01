import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '../spinner/spinner.module';
import { EmployeeApiService } from '../service/employee-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'AddEmployee', component: AddEmployeeComponent },
    ]),
    FormsModule,
    HttpClientModule,
    SpinnerModule
  ],
  exports: [
    AddEmployeeComponent
  ],
  providers: [
    EmployeeApiService
  ]
})
export class AddEmployeeModule { }
