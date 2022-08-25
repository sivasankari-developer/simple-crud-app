import { Component, OnInit } from '@angular/core';
import { iEmployee } from '../employee.model';
import { EmployeescrudService } from '../employeescrud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employeeList: iEmployee[] = [];

  constructor(public employeeService: EmployeescrudService) {
  }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployees();
  }

  deleteEmployeebyId(id: number) {
    var result = confirm("Want to delete?");
    if (result) {
      this.employeeService.deleteEmployee(id);
      console.log('Deleted');
    } else {
      console.log('Not deleted');
    }
  }

  onSearch(keyTerm: any) {
    this.employeeList = this.employeeService.findByName(keyTerm);
  }
}


