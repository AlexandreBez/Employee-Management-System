import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { EmployeeApiService } from '../service/employee-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  employeeData?: any = null;

  errorMessage: any = null;
  successMessage: any = null;
  isLoading = false;

  employeeName: string = null;
  companyName: string = null;
  idForDelete: any = null;

  constructor(
    private employeeService: EmployeeApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllTasks();
    this.employeeService.idForUpdatedEmployee = null;
  }

  getAllTasks() {
    this.isLoading = true;
    this.employeeData = this.employeeService
      .getAllEmployees()
      .pipe(
        map((responseData) => {
          return responseData.map((responseData) => {
            return { ...responseData };
          });
        })
      )
      .subscribe(
        (responseData) => {
          setTimeout(() => {
            this.employeeData = responseData;
            this.isLoading = false;
            console.log(responseData);
          }, 1500);
        },
        (error) => {
          if (error.status === 404) {
            this.employeeData = null;
            this.isLoading = false;
            console.log(error);
            return (this.errorMessage = null);
          } else {
            switch (error.error.status) {
              case 500:
                this.employeeData = null;
                this.isLoading = false;
                console.log(error);
                return (this.errorMessage =
                  'Opss...Something is not working but we will fix soon. Please try again later');
              default:
                this.employeeData = null;
                this.isLoading = false;
                console.log(error);
                return (this.errorMessage =
                  'Opss...Something is not working but we will fix soon. Please try again later');
            }
          }
        }
      );
  }

  searchEmployee() {
    console.log(this.employeeName);
    console.log(this.companyName);

    if (this.employeeName === null && this.companyName === null) {
      this.getAllTasks();
    }
    if (this.employeeName !== null && this.companyName === null) {
      this.searchEmployeeByName();
    }
    if (this.employeeName === null && this.companyName !== null) {
      this.searchEmployeeByCompany();
    }
    if (this.employeeName !== null && this.companyName !== null) {
      this.searchEmployeeByNameAndCompany();
    }
  }

  searchEmployeeByName() {
    this.isLoading = true;

    this.employeeData = this.employeeService
      .getEmployeesByName(this.employeeName.trim())
      .pipe(
        map((responseData) => {
          return responseData.map((responseData) => {
            return { ...responseData };
          });
        })
      )
      .subscribe(
        (responseData) => {
          setTimeout(() => {
            this.employeeData = responseData;
            this.isLoading = false;
            console.log(responseData);
          }, 1500);
        },
        (error) => {
          if (error.status === 404) {
            this.employeeData = null;
            this.isLoading = false;
            this.errorMessage = 'Employee not found....';
            setTimeout(() => {
              this.errorMessage = null;
            }, 2000);
            return console.log(error);
          } else {
            switch (error.error.status) {
              case 500:
                this.employeeData = null;
                this.isLoading = false;
                console.log(error);
                setTimeout(() => {
                  this.errorMessage = null;
                }, 2000);
                return console.log(error);
              default:
                this.employeeData = null;
                this.isLoading = false;
                console.log(error);
                setTimeout(() => {
                  this.errorMessage = null;
                }, 2000);
                return console.log(error);
            }
          }
        }
      );

    this.employeeName = null;
    this.companyName = null;
  }

  searchEmployeeByCompany() {
    this.isLoading = true;

    this.employeeData = this.employeeService
      .getEmployeesByCompany(this.companyName.trim())
      .pipe(
        map((responseData) => {
          return responseData.map((responseData) => {
            return { ...responseData };
          });
        })
      )
      .subscribe(
        (responseData) => {
          setTimeout(() => {
            this.employeeData = responseData;
            this.isLoading = false;
            console.log(responseData);
          }, 1500);
        },
        (error) => {
          if (error.status === 404) {
            this.employeeData = null;
            this.isLoading = false;
            this.errorMessage = 'Employee not found....';
            setTimeout(() => {
              this.errorMessage = null;
            }, 2000);
            return console.log(error);
          } else {
            switch (error.error.status) {
              case 500:
                this.employeeData = null;
                this.isLoading = false;
                console.log(error);
                setTimeout(() => {
                  this.errorMessage = null;
                }, 2000);
                return console.log(error);
              default:
                this.employeeData = null;
                this.isLoading = false;
                console.log(error);
                setTimeout(() => {
                  this.errorMessage = null;
                }, 2000);
                return console.log(error);
            }
          }
        }
      );

    this.employeeName = null;
    this.companyName = null;
  }

  searchEmployeeByNameAndCompany() {
    this.isLoading = true;

    this.employeeData = this.employeeService
      .getEmployeesByNameAndCompany(this.employeeName.trim(), this.companyName.trim())
      .pipe(
        map((responseData) => {
          return responseData.map((responseData) => {
            return { ...responseData };
          });
        })
      )
      .subscribe(
        (responseData) => {
          setTimeout(() => {
            this.employeeData = responseData;
            this.isLoading = false;
            console.log(responseData);
          }, 1500);
        },
        (error) => {
          if (error.status === 404) {
            this.employeeData = null;
            this.isLoading = false;
            this.errorMessage = 'Employee not found....';
            setTimeout(() => {
              this.errorMessage = null;
            }, 2000);
            return console.log(error);
          } else {
            switch (error.error.status) {
              case 500:
                this.employeeData = null;
                this.isLoading = false;
                console.log(error);
                setTimeout(() => {
                  this.errorMessage = null;
                }, 2000);
                return console.log(error);
              default:
                this.employeeData = null;
                this.isLoading = false;
                console.log(error);
                setTimeout(() => {
                  this.errorMessage = null;
                }, 2000);
                return console.log(error);
            }
          }
        }
      );

    this.employeeName = null;
    this.companyName = null;
  }

  deleteTask(id: number) {
    this.isLoading = true;
    this.employeeData = this.employeeService.deleteEmployee(id).subscribe(
      (responseData) => {
        this.successMessage = 'Employee deleted with success...';
        console.log(responseData);
        setTimeout(() => {
          this.successMessage = null;
          this.isLoading = false;
        }, 2000);
        this.getAllTasks();
      },
      (error) => {
        switch (error.error.status) {
          case 500:
            this.employeeData = null;
            this.isLoading = false;
            console.log(error);
            return (this.errorMessage =
              'Opss...Something is not working but we will fix soon. Please try again later');
          default:
            this.employeeData = null;
            this.isLoading = false;
            console.log(error);
            return (this.errorMessage =
              'Opss...Something is not working but we will fix soon. Please try again later');
        }
      }
    );
    this.idForDelete = null;
  }

  updatedEmploye(id: number) {
    this.employeeService.idForUpdatedEmployee = id;
    this.router.navigate(['Update']);
  }
}
