import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AppFormsModule } from '../app-forms/app-forms.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
