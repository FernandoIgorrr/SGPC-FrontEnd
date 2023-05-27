import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatrimoniosListaCompletaComponent } from './patrimonios-lista-completa/patrimonios-lista-completa.component';
import { MenuCardPatrimoniosComponent } from './menu-card-patrimonios/menu-card-patrimonios.component';

const patrimoniosRoutes: Routes = [];

/* const patrimoniosRoutes: Routes = [
  {path: '', component: MenuCardPatrimoniosComponent},
  {path: 'lista-completa', component: PatrimoniosListaCompletaComponent}

]; */

@NgModule({
  imports: [RouterModule.forChild(patrimoniosRoutes)],
  exports: [RouterModule]
})
export class PatrimoniosRoutingModule { }
