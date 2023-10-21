import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from '../views/user-management/user-management.component';

const routes: Routes = [{ path: '', component: LoginComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}




 