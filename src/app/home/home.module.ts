import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainNavComponent,
    ThemePickerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
  ]
})
export class HomeModule { }
