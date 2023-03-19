import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule
  ]
})
export class HomeModule { }
