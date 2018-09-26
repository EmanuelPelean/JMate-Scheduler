/**
 * 
 */
package com.JMateScheduler.JMateScheduler.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.JMateScheduler.JMateScheduler.model.Employee;
import com.JMateScheduler.JMateScheduler.repo.EmployeeRepository;

/**
 * @author Manu
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class EmployeeController {
 
	@Autowired
	EmployeeRepository repository;
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		System.out.println("Get all Employees...");
 
		List<Employee> employees = new ArrayList<>();
		repository.findAll().forEach(employees::add);
 
		return employees;
	}
 
	@PostMapping(value = "/employee/create")
	public Employee postEmployee(@RequestBody Employee employee) {
 
		Employee _employee = repository.save(new Employee(employee.getFirstName(), 
				employee.getLastName(), employee.getRole()));
		return _employee;
	}
 
 
 
	@GetMapping(value = "employees/last_name/{last_name}")
	public List<Employee> findByAge(@PathVariable String last_name) {
 
		List<Employee> employees = repository.findByLastName(last_name);
		return employees;
	}
 
	
}
