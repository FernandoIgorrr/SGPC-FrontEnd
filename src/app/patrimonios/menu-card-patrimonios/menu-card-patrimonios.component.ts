import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-card-patrimonios',
  templateUrl: './menu-card-patrimonios.component.html',
  styleUrls: ['./menu-card-patrimonios.component.scss']
})
export class MenuCardPatrimoniosComponent implements OnInit{

  menucard_patrimonio = [
    {titulo: 'Lista completa',           rota: 'lista-completa'},
    {titulo: 'Lista por Localidades',    rota: 'lista-por-localidade'},
    {titulo: 'Lista por tipo',           rota: 'lista-por-tipo'},
    {titulo: 'Cadastrar um patrimônio',  rota: 'cadastro'},
    {titulo: 'Manejar um patrimônio',    rota: 'manejo'},
  ]

  constructor(private titleService:Title){}

  ngOnInit(): void {
    this.titleService.setTitle("Patrimônios - Home");
  }
}
