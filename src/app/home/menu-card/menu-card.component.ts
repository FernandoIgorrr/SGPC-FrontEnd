import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit{

  menucard = [
    {titulo:'Patrimônios', rota: 'patrimonios'},
    {titulo:'Bolsistas',   rota: 'bolsistas'},
    {titulo:'Informática', rota: 'informatica'},
    {titulo:'Atividades',  rota: 'atividades'}
  ]

  constructor(private titleService: Title){}

  ngOnInit(): void {
    this.titleService.setTitle('SGPC - Home');
  }
}
