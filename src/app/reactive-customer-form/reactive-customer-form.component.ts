import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-customer-form',
  templateUrl: './reactive-customer-form.component.html',
  styleUrls: ['./reactive-customer-form.component.css']
})
export class ReactiveCustomerFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  custForm = {firstName: "", lastName: "", gender: "", email: "", contactNum: ""}

  customerFormDataArray = []
  customerFormData = new FormGroup({
    firstName: new FormControl(this.custForm.firstName),
    lastName: new FormControl(this.custForm.lastName),
    gender: new FormControl(this.custForm.gender),
    contactDetails: new FormGroup({
      email: new FormControl(this.custForm.email),
      contactNum: new FormControl(this.custForm.contactNum),
    })
  })
  onSubmit() {
    console.log(this.customerFormData.value)
    this.customerFormDataArray.push(this.customerFormData.value)
  }
}