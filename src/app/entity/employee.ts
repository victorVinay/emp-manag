export class Employee{
  firstName: string;
  lastName: string;
  email: string;
  contact: number;
  username: string;
  password: string;
  address: string;
  gender: string;
  qualification: string;
  experince: string;

  constructor(firstName: string,
  lastName: string,
  email: string,
  contact: number,
  username: string,
  password: string,
  address: string,
  gender: string,
  qualification: string,
    experince: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.contact = contact;
    this.address = address;
    this.username = username;
    this.password = password;
    this.gender = gender;
    this.qualification = qualification;
    this.experince = experince;
  }
}
