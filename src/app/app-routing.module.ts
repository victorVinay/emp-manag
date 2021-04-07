import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemplyeeComponent } from './editemplyee/editemplyee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  { path: "Employee", component: EmployeelistComponent },
  { path: "AddEmployee", component: AddemployeeComponent },
  { path: "EditEmployee/id:", component: EditemplyeeComponent },
  {path:"**", redirectTo:"Employee"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
