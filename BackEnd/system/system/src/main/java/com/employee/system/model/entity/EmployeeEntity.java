package com.employee.system.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name = "Employee")
@Table(name = "EMPLOYEE")
public class EmployeeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "EMPLOYEE_ID")
	private Integer employeeId;
	
	@Column(name = "NAME")
	private String name;
	
	@Column(name = "COMPANY_NAME")
	private String companyName;
	
	@Column(name = "ROLE")
	private String role;
	
	@Column(name = "SALARY")
	private String salary;
	
	public EmployeeEntity(String name, String companyName, String role, String salary) {
		this.name = name;
		this.companyName = companyName;
		this.role = role;
		this.salary = salary;
	}
	
	public EmployeeEntity() {}

	public Integer getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Integer employeeId) {
		this.employeeId = employeeId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	public String getSalary() {
		return salary;
	}

	public void setSalary(String salary) {
		this.salary = salary;
	}
}
