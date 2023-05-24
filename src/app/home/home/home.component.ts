import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from '../../services/theme.service';
import { Option } from '../../models/option.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector    : 'app-home',
  templateUrl : './home.component.html',
  styleUrls   : ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  menu_list : string[] = ['Patrimônios','Bolsistas','Informática','Atividades'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  constructor(
    private rout: ActivatedRoute,
    private titleService: Title,
    private breakpointObserver    : BreakpointObserver,
    private readonly themeService : ThemeService
  ){}

  ngOnInit() {
    this.titleService.setTitle("Home");
    this.themeService.setTheme("deeppurple-amber");
  }

  themeChangeHandler(themeToSet : any) {
    this.themeService.setTheme(themeToSet);
  }
}
