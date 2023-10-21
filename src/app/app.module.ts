import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ViewsModule } from './views/views.module';
import { ModalEditUserComponent } from './views/modal-edit-user/modal-edit-user.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
