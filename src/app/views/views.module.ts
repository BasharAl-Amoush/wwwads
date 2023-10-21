import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { UserManagementComponent } from './user-management/user-management.component';
import { ModalAddUserComponent } from './user-management/modal-add-user/modal-add-user.component';
import { ModalEditUserComponent } from './modal-edit-user/modal-edit-user.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserManagementComponent,
    ModalAddUserComponent,
    ModalEditUserComponent
  ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ViewsModule { }
