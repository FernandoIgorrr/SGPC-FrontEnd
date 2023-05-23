import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatrimoniosRoutingModule } from './patrimonios-routing.module';
import { PatrimoniosListComponent } from './patrimonios-list/patrimonios-list.component';
import { PatrimoniosHomeComponent } from './patrimonios-home/patrimonios-home.component';


@NgModule({
  declarations: [
    PatrimoniosListComponent,
    PatrimoniosHomeComponent
  ],
  imports: [
    CommonModule,
    PatrimoniosRoutingModule
  ]
})
export class PatrimoniosModule { }
