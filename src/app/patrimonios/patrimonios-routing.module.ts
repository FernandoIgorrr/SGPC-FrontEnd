import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatrimoniosListComponent } from './patrimonios-list/patrimonios-list.component';

const patrimoniosRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(patrimoniosRoutes)],
  exports: [RouterModule]
})
export class PatrimoniosRoutingModule { }
