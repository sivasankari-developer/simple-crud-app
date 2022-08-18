import { Injectable } from '@angular/core';
import { iEmployee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeescrudService {
  employeeList: iEmployee[] = [{
    id: 1,
    name: "Vinoth"
  }];

  count = 2;

  constructor() { }
  getEmployees() {
    return this.employeeList;
  }
  getEmployeeById(id: number) {
    const index: number = this.employeeList.findIndex(x => x.id == id);
    if (index != -1) {
      return this.employeeList[index];
    } else {
      return { id: 0, name: '' };
    }
  }
  public addEmployee(employeeName: string) {
    this.employeeList.push({ id: this.count++, name: employeeName });
  }

  public updateEmployee(id: number, employeeName: string) {
    const index = this.employeeList.findIndex(x => x.id == id);
    this.employeeList[index].name = employeeName;
  }

  public deleteEmployee(id: number) {
    const index: number = this.employeeList.findIndex(x => x.id == id);
    this.employeeList.splice(index, 1);
  }

  public findByName(employeeName: string) {
    const employee = this.employeeList.filter(x => x.name === employeeName);        
    return employee;
  }
}
