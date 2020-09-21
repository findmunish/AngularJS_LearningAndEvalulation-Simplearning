import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registeredUsers: any = [
                            {username: 'Munish', password: 'pass123'},
                            {username: 'Aman', password: 'pass123'},
                            {username: 'Dinesh', password: 'pass123'},
                            {username: 'Vishesh', password: 'pass123'},
                            {username: 'Priya', password: 'pass1234'},
                            {username: 'Rekha', password: 'pass1234'},
                            {username: 'Disha', password: 'pass1234'},
                            {username: 'Ritu', password: 'pass1234'},
                          ]
  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });
  validUser = false;
  loggedIn = false;
  disableSubmitBtn = false;
  alertMessage = '';
  @Output() setAuthentication = new EventEmitter()

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