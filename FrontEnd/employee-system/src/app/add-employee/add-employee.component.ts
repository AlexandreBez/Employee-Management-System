import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../interface/employee';
import { EmployeeApiService } from '../service/employee-api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  @ViewChild('form')
  addEmployeeForm!: NgForm;

  isLoading = false;
  successMessage = null;
  errorMessage = null;

  constructor(
    private router: Router,
    private employeeService: EmployeeApiService
  ){}

  onAddNewEmployee(){

    let name: string = this.trimLine(this.addEmployeeForm.value.employeeName);
    let companyName: string = this.trimLine(this.addEmployeeForm.value.companyName);
    let role: string = this.trimLine(this.addEmployeeForm.value.role);
    let salary: string = this.addEmployeeForm.value.salary;

    let addEmployeeData: Employee = {
      name: name,
      companyName: companyName,
      role: role,
      salary: salary
    }

    this.employeeService.saveNewEmployee(addEmployeeData).subscribe(
      (data) => {
        this.isLoading = true;
        setTimeout(() => {
          this.successMessage = "Employee created with success...";
          this.isLoading = false;
          console.log(data);
        }, 1500);
        setTimeout(() => {
          this.successMessage = null;
          this.router.navigate(['Home']);
        }, 3500);
      },
      (error) => {
        switch (error.error.status) {
          case 500:
            this.isLoading = false;
            console.log(error);
            return (this.errorMessage =
              'Opss...Something is not working but we will fix soon. Please try again later');
          default:
            this.isLoading = false;
            console.log(error);
            return (this.errorMessage =
              'Opss...Something is not working but we will fix soon. Please try again later');
        }
      }
    )
  }

  trimLine(val: string){
    return val.trim();
  }

  onCancel(){
    this.addEmployeeForm.reset();
    this.router.navigate(['/Home']);
  }
}
