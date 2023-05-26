import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatrimoniosHomeComponent } from '../patrimonios/patrimonios-home/patrimonios-home.component';
import { HomeComponent } from './home/home.component';
import { MenuCardComponent } from './menu-card/menu-card.component';

const homeRoutes: Routes = [
  {path: 'patrimonios', component: PatrimoniosHomeComponent},
  {path: 'menu', component: MenuCardComponent},
  {path: '', component: MenuCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
