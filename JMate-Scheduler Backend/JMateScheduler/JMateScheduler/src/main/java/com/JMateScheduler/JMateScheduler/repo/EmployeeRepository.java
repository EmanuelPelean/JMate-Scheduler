/**
 * 
 */
package com.JMateScheduler.JMateScheduler.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.JMateScheduler.JMateScheduler.model.Employee;

/**
 * @author Manu
 *
 */
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
	List<Employee> findByLastName(String name);
}

