import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { EmployeesComponent } from './employees.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [{
      path: 'list', component: ListComponent
    }, { path: 'add', component: AddEditComponent }, { path: 'edit/:id', component: AddEditComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
