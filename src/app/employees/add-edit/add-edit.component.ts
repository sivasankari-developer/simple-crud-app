import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iEmployee } from '../employee.model';
import { EmployeescrudService } from '../employeescrud.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  // define empty object
  employee:iEmployee = {} as iEmployee;

  constructor(public employeeService: EmployeescrudService, private router: Router, private route: ActivatedRoute) {
    console.log("route", this.route);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      this.employee = this.employeeService.getEmployeeById(id);
    })
  }

  onSubmit(value: any) {
    console.log("addvalue=",value);
    if (this.employee.id) {
      this.employeeService.updateEmployee(this.employee.id, value.employeename);
    } else {
      this.employeeService.addEmployee(value.employeename);
    }
    this.router.navigateByUrl("/employees/list");
  }

  onDelete() {
    this.employeeService.deleteEmployee(this.employee.id);
    this.router.navigateByUrl("/employees/list");

  }

}
