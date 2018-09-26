/**
 * 
 */
package com.JMateScheduler.JMateScheduler.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Manu
 *
 */

@Entity
@Table(name = "employee")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "first_name")
	private String first_name;

	@Column(name = "last_name")
	private String last_name;
	
	@Column(name = "role")
	private String role;

	@Column(name = "active")
	private boolean active;

	public Employee() {
		}

	public Employee(String first_name, String last_name, String role) {
			this.first_name = first_name;
			this.last_name = last_name;
			this.role = role;
			this.active = false;
		}

	public long getId() {
		return id;
	}

	public void setFirstName(String first_name) {
		this.first_name = first_name;
	}

	public String getFirstName() {
		return this.first_name;
	}
	
	public void setLastName(String last_name) {
		this.last_name = last_name;
	}

	public String getLastName() {
		return this.last_name;
	}
	
	public void setRole(String role) {
		this.role = role;
	}

	public String getRole() {
		return this.role;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", first name=" + first_name + ", last name=" + last_name + ", role=" + role + ", active=" + active + "]";
	}

}
