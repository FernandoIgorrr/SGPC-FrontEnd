import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-patrimonios-home',
  templateUrl: './patrimonios-home.component.html',
  styleUrls: ['./patrimonios-home.component.scss']
})
export class PatrimoniosHomeComponent implements OnInit{

  menucard_patrimonios_list: string[] = ['Lista Completa','Listas por Localidades','Listas por tipo'];

  constructor(private titleService:Title){}

  ngOnInit(): void {
    this.titleService.setTitle("Patrimônios - Home");
  }
}
