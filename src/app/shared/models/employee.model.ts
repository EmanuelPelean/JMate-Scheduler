export class EmployeeModel {
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public roles: string[];

  constructor(firstName: string, middleName: string, lastName: string, roles: string[]) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.roles = roles;
  }


}
