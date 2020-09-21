import { Component, OnInit } from '@angular/core';
import { CustDataServiceService } from '../cust-data-service.service'

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  constructor(private svcCustomerData: CustDataServiceService) { }

  ngOnInit() {
    this.customersData = this.svcCustomerData.displayData();
  }
  customersData;
  passDataToChildComponent() {
    return this.customersData;
  }
  setCustomerId(updatedCustomerFields) {
    this.customersData[updatedCustomerFields.index]._id = updatedCustomerFields._id
    this.customersData[updatedCustomerFields.index].isVerified = updatedCustomerFields.isVerified
  }
}