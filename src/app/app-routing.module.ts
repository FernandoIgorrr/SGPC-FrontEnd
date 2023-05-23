import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { PatrimoniosHomeComponent } from './patrimonios/patrimonios-home/patrimonios-home.component';
import { MenuCardComponent } from './home/menu-card/menu-card.component';

const routes: Routes = [
  { path  : ''    ,   component : HomeComponent},
  { path  : 'login',  component : LoginComponent},
  { path  : 'home',   component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
