import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit{

  menucard_list : string[] = ['Patrimônios','Bolsistas','Informática','Atividades'];

  constructor(private activatedRoute :ActivatedRoute){}

  ngOnInit(): void {
    console.log('asdasdsad');
  }

}
