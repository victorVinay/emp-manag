import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../entity/employee';
import { EmployeeService } from '../servicesemployeeservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  allEmployee: Employee[] = [];
  filteredList: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {

  }

  ngOnInit(): void {
    this.allEmployee = this.employeeService.getAllEmployess();
    this.filteredList = this.allEmployee;
  }

  addEmployee() {
    this.router.navigate(["AddEmployee"]);
  }

  refereshList() {
    this.allEmployee = this.employeeService.getAllEmployess();
    this.filteredList = this.allEmployee;

  }

}
