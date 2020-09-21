import { Component, OnInit } from '@angular/core';
import { REGISTERED_USERS } from '../registeredUsers'

@Component({
  selector: 'app-show-registered-users',
  templateUrl: './show-registered-users.component.html',
  styleUrls: ['./show-registered-users.component.css']
})
export class ShowRegisteredUsersComponent implements OnInit {

  users: any = []
  constructor() { }
  SHOW_PASSWORD = 'Reveal Password';
  HIDE_PASSWORD = 'Hide Password';
  ngOnInit() {
    for(let i = 0; i < REGISTERED_USERS.length; i++) {
      let {username, password, label} = {label:this.SHOW_PASSWORD, ...REGISTERED_USERS[i]}; 
      this.users.push({username, password, label})
    }
  }
  toggleButtonDisplay(user) {
    const index = this.users.findIndex(u => u.username === user.username && u.password === user.password);
    if(index != -1) {
      //this.users[index].label = (user.label.toLowerCase() === this.SHOW_PASSWORD.toLowerCase() ? user.password : this.LABEL);
      this.users[index].label = this.users[index].label === this.SHOW_PASSWORD ? this.HIDE_PASSWORD : this.SHOW_PASSWORD;
    }
  }
}