import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatrimoniosHomeComponent } from '../patrimonios/patrimonios-home/patrimonios-home.component';
import { HomeComponent } from './home/home.component';

const homeRoutes: Routes = [
  {path : "patrimonios", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
