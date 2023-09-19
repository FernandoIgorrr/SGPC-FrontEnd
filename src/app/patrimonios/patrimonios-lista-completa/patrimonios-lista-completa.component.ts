import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { PatrimonioGeral } from 'src/app/model/patrimoniogeral.model';
import { PatrimonioGeralService } from 'src/app/services/patrimonio-services/patrimonio-geral.service';

@Component({
  selector: 'app-patrimonios-lista-completa',
  templateUrl: './patrimonios-lista-completa.component.html',
  styleUrls: ['./patrimonios-lista-completa.component.scss']
})
export class PatrimoniosListaCompletaComponent implements OnInit{

  readonly displayedColumns = ['tombamento', 'descricao', 'estado', 'tipo', 'comodo', 'andar', 'predio', 'complexo'];


  //readonly displayedColumns = ['tombamento', 'descricao', 'estado', 'tipo', 'comodo', 'andar', 'predio', 'complexo'];

  patrimonioGeral: Observable<PatrimonioGeral[]>;

  constructor(private titleService: Title,
              private patrimobioGeralSerive: PatrimonioGeralService){

    this.patrimonioGeral = patrimobioGeralSerive.list();

  }

  ngOnInit(): void {
      this.titleService.setTitle("Lista completa de Patrimônios");
  }
}
