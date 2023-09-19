import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
