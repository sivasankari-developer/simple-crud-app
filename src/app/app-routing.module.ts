import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './employees/add-edit/add-edit.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
 {
    path: '',
    pathMatch:"full",
    redirectTo: "/employees/list"
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
