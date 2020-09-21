import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { CustDataServiceService } from './cust-data-service.service';
import { Assignment06Sep2020CompComponent } from './assignment-06-sep-2020-comp/assignment-06-sep-2020-comp.component';
import { Assignment12Sep2020CompComponent } from './assignment-12-sep-2020-comp/assignment-12-sep-2020-comp.component';
import { CustomerStatusCompComponent } from './customer-status-comp/customer-status-comp.component';
import { Assignment13Sep2020CompComponent } from './assignment-13-sep-2020-comp/assignment-13-sep-2020-comp.component';
import { CustomerFormDataComponent } from './customer-form-data/customer-form-data.component';
import { ReactiveCustomerFormComponent } from './reactive-customer-form/reactive-customer-form.component';
import { Assignment19Sep2020CompComponent } from './assignment-19-sep-2020-comp/assignment-19-sep-2020-comp.component';
import { HttpFetchCompComponent } from './http-fetch-comp/http-fetch-comp.component';
import { Evaluation19Sep2020CompComponent } from './evaluation-19-sep-2020-comp/evaluation-19-sep-2020-comp.component';
import { CustFormComponent } from './cust-form/cust-form.component';
import { CustDataShowComponent } from './cust-data-show/cust-data-show.component';
import { LoginComponent } from './login/login.component';
import { HttpFetchApiComponent } from './http-fetch-api/http-fetch-api.component';
import { ShowRegisteredUsersComponent } from './show-registered-users/show-registered-users.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ParentCompComponent, ChildCompComponent, Assignment06Sep2020CompComponent, Assignment12Sep2020CompComponent, CustomerStatusCompComponent, Assignment13Sep2020CompComponent, CustomerFormDataComponent, ReactiveCustomerFormComponent,  Assignment19Sep2020CompComponent, HttpFetchCompComponent, Evaluation19Sep2020CompComponent, CustFormComponent, CustDataShowComponent, LoginComponent, HttpFetchApiComponent, ShowRegisteredUsersComponent],
  bootstrap:    [ AppComponent ],
  providers: [CustDataServiceService]
})
export class AppModule { }
