import { Component, VERSION } from '@angular/core';
//import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor() {
    for (let i = 0; i < this.assignmentList.length; i++) {
      this.assignmentFlags.push(false);
    }
  }
  assignmentList = ['6-Sep-2020', '12-Sep-2020', '13-Sep-2020', '19-Sep-2020', '13-Oct-2020']
  assignmentFlags: any = [];
  assignmentSelected='';
  openComponent() {
    let index = this.assignmentList.findIndex(value => this.assignmentSelected === value)
    this.assignmentFlags = [false, false, false]
    this.assignmentFlags[index] = !this.assignmentFlags[index]
  }
}