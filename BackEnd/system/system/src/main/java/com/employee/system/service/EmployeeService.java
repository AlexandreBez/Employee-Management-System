package com.employee.system.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.employee.system.model.EmployeeRepository;
import com.employee.system.model.entity.EmployeeEntity;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	public ResponseEntity<List<EmployeeEntity>> getAllEmployees() {
		try {
			List<EmployeeEntity> employeeData = employeeRepository.findAll();

			if (employeeData.isEmpty()) {
				System.out.println(employeeData);
				return new ResponseEntity<>(employeeData, HttpStatus.NOT_FOUND);
			}
			return new ResponseEntity<>(employeeData, HttpStatus.OK);

		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<EmployeeEntity> saveEmployee(EmployeeEntity employee) {
		try {

			EmployeeEntity employeeData = employeeRepository.save(new EmployeeEntity(employee.getName(),
					employee.getCompanyName(), employee.getRole(), employee.getSalary()));

			return new ResponseEntity<>(employeeData, HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<Optional<EmployeeEntity>> getEmployeeById(Integer id) {
		try {

			Optional<EmployeeEntity> employeeData = employeeRepository.findById(id);

			if (employeeData.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(employeeData, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<EmployeeEntity> updateEmployee(EmployeeEntity employeeEntity, Integer id) {
		try {

			Optional<EmployeeEntity> employeeData = employeeRepository.findById(id);

			if (employeeData.isPresent()) {
				EmployeeEntity _employeeEntity = employeeData.get();
				_employeeEntity.setName(employeeEntity.getName());
				_employeeEntity.setCompanyName(employeeEntity.getCompanyName());
				_employeeEntity.setRole(employeeEntity.getRole());
				_employeeEntity.setSalary(employeeEntity.getSalary());
				return new ResponseEntity<>(employeeRepository.save(_employeeEntity), HttpStatus.OK);
			}
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<HttpStatus> deleteEmployeeById(Integer id) {
		try {

			Optional<EmployeeEntity> employeeData = employeeRepository.findById(id);

			if (employeeData.isPresent()) {
				employeeRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.OK);
			}
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<List<EmployeeEntity>> searchEmployeeByName(String name) {
		try {

			List<EmployeeEntity> employeeData = employeeRepository.getEmployeeByName(name);

			if (employeeData.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			return new ResponseEntity<>(employeeData, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<List<EmployeeEntity>> searchEmployeeByCompany(String companyName) {
		try {

			List<EmployeeEntity> employeeData = employeeRepository.getEmployeeByCompany(companyName);

			if (employeeData.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			return new ResponseEntity<>(employeeData, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<List<EmployeeEntity>> searchEmployeeByNameAndCompanyName(String name, String companyName) {
		try {

			List<EmployeeEntity> employeeData = employeeRepository.getEmployeeByNameAndCompanyName(name, companyName);

			if (employeeData.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			return new ResponseEntity<>(employeeData, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
