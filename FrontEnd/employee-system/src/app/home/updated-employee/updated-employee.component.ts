import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Employee } from '../../interface/employee';
import { EmployeeApiService } from '../../service/employee-api.service';

@Component({
  selector: 'app-updated-employee',
  templateUrl: './updated-employee.component.html',
  styleUrls: ['./updated-employee.component.css'],
})
export class UpdatedEmployeeComponent implements OnInit {
  isLoading = false;
  errorMessage = null;
  successMessage = null;

  loadedEmployee: any;
  _name: string;
  _companyName: string;
  _role: string;
  _salary: string;

  @ViewChild('updatedform')
  updatedForm?: NgForm;

  constructor(
    private router: Router,
    private employeeService: EmployeeApiService
  ) {}

  ngOnInit() {
    if (
      this.employeeService.idForUpdatedEmployee === null ||
      this.employeeService.idForUpdatedEmployee === undefined
    ) {
      this.router.navigate(['Home']);
    } else {
      this.getEmployeeById();
    }
  }

  getEmployeeById() {
    this.loadedEmployee = this.employeeService
      .getEmployeeById(this.employeeService.idForUpdatedEmployee)
      .pipe(
        map((responseData) => {
          this._name = responseData.name;
          this._companyName = responseData.companyName;
          this._role = responseData.role;
          this._salary = responseData.salary;
          return responseData;
        })
      )
      .subscribe(
        (data) => {
          this.isLoading = true;
          setTimeout(() => {
            this.isLoading = false;
            console.log(data);
          }, 1500);
        },
        (error) => {
          this.router.navigate(['Home']);
          console.log(error);
          return (this.loadedEmployee = null);
        }
      );
  }

  trimLine(val: string) {
    return val.trim();
  }

  onUpdatedEmployee() {
    let name: string = this.trimLine(this.updatedForm.value.employeeName);
    let companyName: string = this.trimLine(this.updatedForm.value.companyName);
    let role: string = this.trimLine(this.updatedForm.value.role);
    let salary: string = this.updatedForm.value.salary;

    let updated_employee: Employee = {
      name: name,
      companyName: companyName,
      role: role,
      salary: salary,
    };

    this.employeeService
      .updateTask(this.employeeService.idForUpdatedEmployee, updated_employee)
      .subscribe(
        (data) => {
          this.isLoading = true;
          setTimeout(() => {
            this.successMessage = 'Employee updated with success...';
            this.isLoading = false;
            console.log(data);
          }, 2000);
          setTimeout(() => {
            this.successMessage = null;
            this.router.navigate(['Home']);
          }, 4000);
        },
        (error) => {
          switch (error.error.status) {
            case 500:
              console.log(error);
              this.isLoading = false;
              return (this.errorMessage =
                'Opss...Something is not working but we will fix soon. Please try again later');
            default:
              console.log(error);
              this.isLoading = false;
              return (this.errorMessage =
                'Opss...Something is not working but we will fix soon. Please try again later');
          }
        }
      );
  }

  onCancel() {
    this.router.navigate(['/Home']);
  }
}
