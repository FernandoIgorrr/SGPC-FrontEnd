import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { PatrimoniosHomeComponent } from './patrimonios/patrimonios-home/patrimonios-home.component';
import { MenuCardComponent } from './home/menu-card/menu-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: ''    ,   component: HomeComponent,
   children: [
    {path: 'patrimonios', component: PatrimoniosHomeComponent},
    {path: 'menu', component: MenuCardComponent}
   ]
  },
  { path: 'login',  component: LoginComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
