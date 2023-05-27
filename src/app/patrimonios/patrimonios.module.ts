import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatrimoniosRoutingModule } from './patrimonios-routing.module';
import { PatrimoniosHomeComponent } from './patrimonios-home/patrimonios-home.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { PatrimoniosListaCompletaComponent } from './patrimonios-lista-completa/patrimonios-lista-completa.component';
import { MenuCardPatrimoniosComponent } from './menu-card-patrimonios/menu-card-patrimonios.component';
import { PatrimonioCadastroComponent } from './patrimonio-cadastro/patrimonio-cadastro.component';


@NgModule({
  declarations: [
    PatrimoniosHomeComponent,
    PatrimoniosListaCompletaComponent,
    MenuCardPatrimoniosComponent,
    PatrimonioCadastroComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    PatrimoniosRoutingModule
  ]
})
export class PatrimoniosModule { }
