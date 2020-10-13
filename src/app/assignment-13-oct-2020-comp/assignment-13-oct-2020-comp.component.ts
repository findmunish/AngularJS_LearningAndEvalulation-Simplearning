import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assignment-13-oct-2020-comp',
  templateUrl: './assignment-13-oct-2020-comp.component.html',
  styleUrls: ['./assignment-13-oct-2020-comp.component.css']
})
export class Assignment13Oct2020CompComponent implements OnInit {
  banks: any = [];
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    // const banksLink = 'https://tin.tin.nsdl.com/tan/Bank.html';
    // const banksLink = 'https://www.npci.org.in/national-automated-clearing-live-members-1';
    const banksLink = 'https://github.com/razorpay/ifsc/releases/IFSC-list.json'
    this.httpClient.get(banksLink).subscribe((bankRecords: any) => {
      this.banks = bankRecords;
    });
  }
}
