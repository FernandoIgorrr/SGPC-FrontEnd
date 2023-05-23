import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { AppMaterialModule } from '../app-material/app-material.module';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { MenuCardComponent } from './menu-card/menu-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    ThemePickerComponent,
    MenuCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
  ]
})
export class HomeModule { }
