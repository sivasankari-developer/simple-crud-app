import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    AddEditComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule
  ]
})
export class EmployeesModule { }
