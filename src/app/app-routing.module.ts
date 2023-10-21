import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UserManagementComponent } from './views/user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      { path: 'usermanagement', component:UserManagementComponent, pathMatch: 'full' },
      // other routes that should have the navbar and footer...
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./user-management/user-management.module').then(
        (module) => module.UserManagementModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)
],
  exports: [RouterModule],
})
export class AppRoutingModule {}
