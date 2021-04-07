import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../entity/employee';
import { EmployeeService } from '../servicesemployeeservice.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent  {

  @Input()
  employee!: Employee;

  @Output() refereshEmployeeList: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private employeeService: EmployeeService, private router: Router) {

  }

  editEmployee() {
    this.router.navigate(["EditEmployee/" + this.employee.firstName]);
  }

  deleteEmployee(emp:Employee) {
    var result = confirm("Are u sure");
    if (result){
      this.employeeService.deleteEmployee(this.employee.firstName);
      this.refereshEmployeeList.emit(true);
      this.router.navigate(["Employee"]);
    }
  }

}
