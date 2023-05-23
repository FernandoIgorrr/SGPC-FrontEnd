import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent {
  menucard_list : string[] = ['Patrimônios','Bolsistas','Informática','Atividades'];

}
