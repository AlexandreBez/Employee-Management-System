import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { EmployeeApiService } from '../service/employee-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from '../spinner/spinner.module';
import { FormsModule } from '@angular/forms';
import { UpdatedEmployeeComponent } from './updated-employee/updated-employee.component';

@NgModule({
  declarations: [
    HomeComponent,
    UpdatedEmployeeComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'Home', component: HomeComponent },
      { path: 'Update', component: UpdatedEmployeeComponent },
    ]),
    SpinnerModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    UpdatedEmployeeComponent
  ],
  providers: [EmployeeApiService]
})
export class HomeModule { }
