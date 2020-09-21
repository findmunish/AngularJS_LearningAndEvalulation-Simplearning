import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation-19-sep-2020-comp',
  templateUrl: './evaluation-19-sep-2020-comp.component.html',
  styleUrls: ['./evaluation-19-sep-2020-comp.component.css']
})
export class Evaluation19Sep2020CompComponent implements OnInit {

  constructor() { }
  ngOnInit() {}
  
  showView='login';
  customers: any = [];
  authenticationObj = {username: '', loggedIn: false};
  addCustomerInfo(customer) {
    this.customers.push(customer);
  }
  getAuthentication({username, loggedIn}) {
    this.authenticationObj = {username, loggedIn}
    if (this.authenticationObj.loggedIn === true ) {
      this.showView='form';
    }
  }
}
