import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserManagementModule { }
