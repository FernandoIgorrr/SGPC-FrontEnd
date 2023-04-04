import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ThemeService } from '../../services/theme.service';
import { Option } from '../../models/option.model';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent {

  @Input() options: Array<Option> | any;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeService) {}

  changeTheme(themeToSet : any) {
    this.themeChange.emit(themeToSet);
  }
}
