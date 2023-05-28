import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-patrimonios-lista-completa',
  templateUrl: './patrimonios-lista-completa.component.html',
  styleUrls: ['./patrimonios-lista-completa.component.scss']
})
export class PatrimoniosListaCompletaComponent implements OnInit{
  constructor(private titleService: Title){}

  ngOnInit(): void {
      this.titleService.setTitle("Lista completa de Patrimônios");
  }
}
