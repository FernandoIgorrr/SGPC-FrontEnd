import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit{

  menucard_list : string[] = ['Patrimônios','Bolsistas','Informática','Atividades'];

  menucard = [
    {titulo:'Patrimônios',           rota: 'patrimonios'},
    {titulo:'Bolsistas',    rota: 'bolsistas'},
    {titulo:'Informática',           rota: 'informatica'},
    {titulo:'Atividades',  rota: 'atividades'}
  ]

  constructor(private activatedRoute :ActivatedRoute){}

  ngOnInit(): void {
    console.log('asdasdsad');
  }

}
