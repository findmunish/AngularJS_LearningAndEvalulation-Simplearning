import { Injectable } from '@angular/core';

@Injectable()
export class CustDataServiceService {

  constructor() { }

  customers = [
    {
      name: 'Raj',
      age: 30,
      contactNum: 1234567890,
      address: 'Gurgaon'
    },
    {
      name: 'Naresh',
      age: 31,
      contactNum: 9876543210,
      address: 'Delhi'
    },
    {
      name: 'Samantha',
      age: 27,
      contactNum: 4567891230,
      address: 'California'
    },
    {
      name: 'Abhishek',
      age: 21,
      contactNum: 88884444,
      address: 'Bengaluru'
    }
  ]
  displayData() {
    return this.customers;
  }
}