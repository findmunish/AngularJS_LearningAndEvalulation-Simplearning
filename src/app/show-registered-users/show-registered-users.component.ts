import { Component, OnInit } from '@angular/core';
import { REGISTERED_USERS } from '../registeredUsers'

@Component({
  selector: 'app-show-registered-users',
  templateUrl: './show-registered-users.component.html',
  styleUrls: ['./show-registered-users.component.css']
})
export class ShowRegisteredUsersComponent implements OnInit {

  users: any = REGISTERED_USERS
  constructor() { }

  ngOnInit() {
  }
}