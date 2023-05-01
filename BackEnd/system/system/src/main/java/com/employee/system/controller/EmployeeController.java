package com.employee.system.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.system.model.entity.EmployeeEntity;
import com.employee.system.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("/getAllEmployees")
	public ResponseEntity<List<EmployeeEntity>> getAllEmployees(){
		return employeeService.getAllEmployees();
	}
	
	@PostMapping("/saveEmployee")
	public ResponseEntity<EmployeeEntity> saveEmployees(@RequestBody EmployeeEntity employee){
		return employeeService.saveEmployee(employee);
	}
	
	@GetMapping("/getEmployee/{id}")
	public ResponseEntity<Optional<EmployeeEntity>> getEmployeeById(@PathVariable Integer id){
		return employeeService.getEmployeeById(id);
	}
	
	@PutMapping("/updateEmployee/{id}")
	public ResponseEntity<EmployeeEntity> updateEmployee(@RequestBody EmployeeEntity employee, @PathVariable Integer id){
		return employeeService.updateEmployee(employee, id);
	}
	
	@DeleteMapping("/deleteEmployee/{id}")
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable Integer id){
		return employeeService.deleteEmployeeById(id);
	}
	
	@GetMapping("/getEmployeeByName/{name}")
	public ResponseEntity<List<EmployeeEntity>> searchEmployeeByName(@PathVariable String name){
		return employeeService.searchEmployeeByName(name);
	}
	
	@GetMapping("/getEmployeeByCompany/{company}")
	public ResponseEntity<List<EmployeeEntity>> searchEmployeeByCompany(@PathVariable String company){
		return employeeService.searchEmployeeByCompany(company);
	}
	
	@GetMapping("/getEmployeeByNameAndCompany/{name}/{company}")
	public ResponseEntity<List<EmployeeEntity>> searchEmployeeByNameAndCompanyName(@PathVariable String name, @PathVariable String company){
		return employeeService.searchEmployeeByNameAndCompanyName(name, company);
	}
}
