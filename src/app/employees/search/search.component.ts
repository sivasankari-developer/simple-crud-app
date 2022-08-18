import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeescrudService } from '../employeescrud.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  constructor(private employeeService: EmployeescrudService) { }

  ngOnInit(): void {

  }

  onSearch(searchform: string) {
    if (searchform.length > 0) {
      this.search.emit(searchform);
    }
  }
}
