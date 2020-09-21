import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-status-comp',
  templateUrl: './customer-status-comp.component.html',
  styleUrls: ['./customer-status-comp.component.css']
})
export class CustomerStatusCompComponent implements OnInit {

  constructor() {
    for(let i = 0; i < this.customers.length; i++) {
      this.customers[i].status = Math.random() > 0.5 ? 'Online' : 'Offline'
    }
  }

  ngOnInit() {}
  customers = [
    {_id: 101, name: 'James', status: 'Online'},
    {_id: 102, name: 'Mike', status: 'Online'},
    {_id: 103, name: 'John', status: 'Online'},
    {_id: 104, name: 'Samuel', status: 'Online'},
    {_id: 105, name: 'Andrew', status: 'Online'},
    {_id: 106, name: 'Joe', status: 'Online'},
    {_id: 107, name: 'Jack', status: 'Online'},
    {_id: 108, name: 'Steve', status: 'Online'},
    {_id: 108, name: 'Thomas', status: 'Online'},
    {_id: 110, name: 'Peter', status: 'Online'}
  ]
  getBgColor(customer) {
    return customer.status === 'Online' ? 'green' : 'red'
  }
  toggleStatus(customer) {
    customer.status = customer.status === 'Online' ? 'Offline' : 'Online'
  }
}