import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  constructor() {}
  ngOnInit() {
    for(let index = 0; index < this.customersFromParent.length; index++) {
      let updatedCustomer = { name: '', age: 0, contactNum: 0, address:0, _id: '0', isVerified: false }

      updatedCustomer.name = this.customersFromParent[index].name;
      updatedCustomer.age = this.customersFromParent[index].age;
      updatedCustomer.contactNum = this.customersFromParent[index].contactNum;
      updatedCustomer.address = this.customersFromParent[index].address;
      updatedCustomer._id = Math.random().toString(36).substr(2, 7)
      this.updatedCustomers.push(updatedCustomer);
    }
  }

  @Input() customersFromParent;
  @Output() customerId = new EventEmitter();
  updatedCustomers = [];
  toggleVerification(customer) {
      customer.isVerified = !customer.isVerified
  }
  newCustomerValues = {_id: -1, index: -1, isVerified: false};
  sendCustomerId(customer) {
    this.newCustomerValues.index = this.updatedCustomers.findIndex(cust => cust._id === customer._id)
    this.newCustomerValues._id = customer._id;
    this.newCustomerValues.isVerified = customer.isVerified;
    this.customerId.emit(this.newCustomerValues);
  } 
}
