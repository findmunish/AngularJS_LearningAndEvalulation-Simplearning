import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cust-data-show',
  templateUrl: './cust-data-show.component.html',
  styleUrls: ['./cust-data-show.component.css']
})
export class CustDataShowComponent implements OnInit {

  constructor() { }
  @Input() customersInfo: any = [];
  ngOnInit() {
  }
}