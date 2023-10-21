import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { LoginComponent } from './login/login.component';
import { UserManagementRoutingModule } from './user-management-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule ,
    UserManagementRoutingModule,
    HttpClientModule,

    
  ] 
})
export class UserManagementModule { }
