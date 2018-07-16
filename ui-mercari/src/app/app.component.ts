import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'APP_HOME';
  constructor(private translate: TranslateService) {
    if (localStorage.getItem('user_lang')) {
      this.translate.setDefaultLang(localStorage.getItem('user_lang'));
      this.translate.use(localStorage.getItem('user_lang'));
    } else {
      this.translate.setDefaultLang('en-US');
      this.translate.use('en-US');
    }
  }
}
