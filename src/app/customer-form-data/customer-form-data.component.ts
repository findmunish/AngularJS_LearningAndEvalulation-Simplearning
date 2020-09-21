import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form-data',
  templateUrl: './customer-form-data.component.html',
  styleUrls: ['./customer-form-data.component.css']
})
export class CustomerFormDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  customer = {custFName:'', custLName:'', email:'', contact:'', gender:''}
  onFormSubmit() {
    console.log(this.customer)
  }
}