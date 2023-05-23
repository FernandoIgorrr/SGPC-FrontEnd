import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCardComponent } from './menu-card/menu-card.component';

const homeRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
