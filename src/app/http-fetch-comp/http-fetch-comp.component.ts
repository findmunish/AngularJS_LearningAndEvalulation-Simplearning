import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-fetch-comp',
  templateUrl: './http-fetch-comp.component.html',
  styleUrls: ['./http-fetch-comp.component.css']
})
export class HttpFetchCompComponent implements OnInit {

  httpFetchedData;
  constructor(private httpClient: HttpClient) { }
  link = 'https://jsonplaceholder.typicode.com/users'
  ngOnInit() {
    this.httpClient.get(this.link).subscribe((fetchedRecord)=>this.displayHttpFetchedData(fetchedRecord));
  }
  displayHttpFetchedData(fetchedRecord) {
    this.httpFetchedData = fetchedRecord
  }

}