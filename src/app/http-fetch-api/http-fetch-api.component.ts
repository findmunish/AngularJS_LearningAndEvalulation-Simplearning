import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-fetch-api',
  templateUrl: './http-fetch-api.component.html',
  styleUrls: ['./http-fetch-api.component.css']
})
export class HttpFetchApiComponent implements OnInit {

  users: any = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
   const link = 'https://jsonplaceholder.typicode.com/users';
    this.httpClient.get(link).subscribe((jsonRecord: any) => {
      this.users = jsonRecord.filter(user => user.username.length > 5);
    });
  }
}
