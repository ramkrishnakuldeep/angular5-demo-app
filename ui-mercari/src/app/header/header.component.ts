import { Component, OnInit } from '@angular/core';
import { ItemDetailsService } from '../services/item-details.service';
import { ItemsService } from '../services/items.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemDetailHeader = false;
  itemName = '';
  toggleToLang;
  constructor(private itemDetailsService: ItemDetailsService, private itemService: ItemsService, private translate: TranslateService) { }

  goBack() {
    this.itemDetailHeader = false;
  }

  search(_val) {
    this.itemService.searchItem(_val);
  }
  changeLanguage(lang) {
    this.translate.use(lang);
    this.translate.currentLang = lang;
    localStorage.setItem('user_lang', lang);
  }
  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.toggleToLang = this.translate.instant('TOGGLE_TO_LANG');
    });
    this.itemDetailsService.toggleHeaderBar.subscribe((res) => {
      this.itemDetailHeader = res.val;
      this.itemName = res.name;
    });
  }


}
