import { Injectable } from '@angular/core';
import { Employee } from './entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  allEmployees: Employee[] = [
    {
      "firstName" :"vinay",
      "lastName" : "jadon",
      "email" : "qwert@gmail.com",
      "address" : "cajsdncjxnajknxkcn jkcx",
      "contact" : 654656457657,
      "username" : "scadfagfdvv",
      "password" : "1243434",
      "gender" : "male",
      "qualification" : "None",
      "experince" : "None"

    }
  ];

  getAllEmployess(): Employee[]{
    return this.allEmployees;
  }

  addEmployee(employee: Employee) {
    this.allEmployees.push(employee);
  }

  deleteEmployee(firstName: string) {
    this.allEmployees = this.allEmployees.filter(emp => emp.firstName != firstName);
  }



}
