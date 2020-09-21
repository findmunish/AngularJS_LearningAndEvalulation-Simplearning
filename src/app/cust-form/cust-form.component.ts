import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cust-form',
  templateUrl: './cust-form.component.html',
  styleUrls: ['./cust-form.component.css']
})
export class CustFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  customerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    contact: ['', Validators.required],
    email: ['', Validators.required]
  });

  disableSubmit: boolean = true;
  alertMessage = '';
  ngOnInit() {
    this.customerForm.valueChanges.subscribe(customer => {
      this.alertMessage = '';
      this.disableSubmit = !(customer.firstName && customer.lastName && customer.contact && customer.email);
    });
  }

  @Output() addCustomer = new EventEmitter()
  submitCustomerForm() {
    this.addCustomer.emit(this.customerForm.value);
    this.customerForm.reset();
    this.alertMessage = 'Added to Customers List, You can check in Display Tab!';
  }
}
