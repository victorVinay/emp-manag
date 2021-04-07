import { Component, OnInit } from '@angular/core';
import { Employee } from '../entity/employee';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../servicesemployeeservice.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {


  orignalEmployeeModel: Employee = {
    firstName: '',
    lastName: '',
    email: '',
    contact:0,
    address: '',
    username: '',
    password: '',
    gender: '',
    qualification:'',
    experince: '',

  };

  employeeModel: Employee = {
    ...this.orignalEmployeeModel

  };

  qualification: string[] = [];
  experince: string[] = [];
  language: { [key: string]: Object }[] = [];

  firstName: string ='';
  lastName: string = '';
  email: string ='';
  contact: number = 0;
  username: string = '';
  password: string = '';
  address: string = '';
  gender: string = '';



  constructor(private employeeServices: EmployeeService, private router:Router) { }

  ngOnInit(): void {


    this.qualification = ['None', 'UG', 'PG'];
    this.experince = ['None', '1 Year', '2 Year', '3 Year', '4 Year'];
    this.language = [
    {name:'C/C++', value:'C/C++', checked:false},
    {name:'Java', value:'Java', checked:false},
    {name:'Python', value:'Python', checked:false}
  ]
  }

  saveEmployee() {
    this.employeeModel = new Employee(this.firstName, this.lastName, this.email, this.contact, this.username, this.password, this.address, this.gender, this.qualification.toString(), this.experince.toString());
    this.employeeServices.addEmployee(this.employeeModel);
    this.router.navigate(["Employee"]);
  }

  cancelEmployee() {
    this.router.navigate(["Employee"]);

  }
}
