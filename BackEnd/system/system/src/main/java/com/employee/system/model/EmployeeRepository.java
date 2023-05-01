package com.employee.system.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.employee.system.model.entity.EmployeeEntity;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Integer>{

	
	@Query("SELECT u FROM Employee u WHERE u.name LIKE %:name%")
	List<EmployeeEntity> getEmployeeByName(@Param("name") String name);
	
	@Query("SELECT c FROM Employee c WHERE c.companyName LIKE %:companyName%")
	List<EmployeeEntity> getEmployeeByCompany(@Param("companyName") String companyName);
	
	@Query("SELECT u FROM Employee u WHERE u.name LIKE %:name% AND u.companyName LIKE %:companyName%")
	List<EmployeeEntity> getEmployeeByNameAndCompanyName(@Param("name") String name, @Param("companyName") String companyName);
}
