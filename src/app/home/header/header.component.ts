import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/";
import { ThemeService } from '../../services/theme.service';
import { Option } from '../../models/option.model';


@Component({
  selector    : "app-header",
  templateUrl : "./header.component.html",
  styleUrls   : ["./header.component.scss"]
})
export class HeaderComponent implements OnInit  {
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  constructor(private readonly themeService: ThemeService) {}
  ngOnInit() {
    this.themeService.setTheme("deeppurple-amber");
  }

  themeChangeHandler(themeToSet : any) {
    this.themeService.setTheme(themeToSet);
  }
}
