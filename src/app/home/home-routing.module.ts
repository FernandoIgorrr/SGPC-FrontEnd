import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  const homeRoutes: Routes = [];
/* const homeRoutes: Routes = [
  {path: 'patrimonios', component: PatrimoniosHomeComponent, children :[
    {path: '', component: MenuCardPatrimoniosComponent},
    {path: 'lista-completa', component: PatrimoniosListaCompletaComponent},
    {path: 'cadastro', component: PatrimonioCadastroComponent}
  ]},
  {path: 'menu', component: MenuCardComponent},
  {path: '', component: MenuCardComponent}
];
 */
@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
