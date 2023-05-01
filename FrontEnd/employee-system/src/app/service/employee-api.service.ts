import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interface/employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeApiService {

  url = "http://localhost:8080";

  idForUpdatedEmployee: number;

  constructor(
    private http: HttpClient
  ) { }

  public getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/getAllEmployees');
  }

  public getEmployeesByName(name: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/getEmployeeByName/'+name);
  }

  public getEmployeesByCompany(company: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/getEmployeeByCompany/'+company);
  }

  public getEmployeesByNameAndCompany(name: string, company: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/getEmployeeByNameAndCompany/'+name+"/"+company);
  }

  public deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.url + '/deleteEmployee/'+id);
  }

  public updateTask(id: number, employee: Employee): Observable<Employee> {
    let updatedEmployee: Employee = employee;
    return this.http.put<Employee>(this.url + '/updateEmployee/'+id, updatedEmployee);
  }

  public getEmployeeById(id:number): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/getEmployee/'+id);
  }

  public saveNewEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url + '/saveEmployee', employee);
  }

}
