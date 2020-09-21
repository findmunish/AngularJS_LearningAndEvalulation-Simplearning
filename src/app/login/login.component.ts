import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { REGISTERED_USERS } from '../registeredUsers'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registeredUsers: any = REGISTERED_USERS;
  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });
  validUser = false;
  loggedIn = false;
  disableSubmitBtn = false;
  alertMessage = '';
  @Output() setAuthentication = new EventEmitter()
  @Output() sendRegisteredUserList = new EventEmitter()
  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe((field) => {
      this.loggedIn = false;
      this.alertMessage = '';
      this.disableSubmitBtn = !(field.username && field.password);
    })
  }
  loginUser() {
    const {username, password} = this.loginForm.value;
    let index = this.registeredUsers.findIndex( regdUser => username.toLowerCase() === regdUser.username.toLowerCase() && password === regdUser.password )
    if(index === -1) {
      this.loggedIn = false;
      this.alertMessage = 'Invalid Credentials!';
    } else {
      this.loggedIn = true;
      this.alertMessage = 'Valid Credentials!';
    }
    this.setAuthentication.emit( {username, loggedIn: this.loggedIn})
  }
}