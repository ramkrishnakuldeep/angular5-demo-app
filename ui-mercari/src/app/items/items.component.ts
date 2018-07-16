import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private categoryService: CategoryService, private itemsService: ItemsService) { }
  catagories = [];
  items = [];
  activeCategory = 2;
  searchItem;

  getCategories() {
    this.categoryService.getCategoryList().subscribe((data) => {
      console.log('data ' + data.data.length);
      this.catagories = data.data;
    }, (err) => {
      console.log('err ' + err);
    });
  }

  getItems() {
    this.itemsService.getItemList().subscribe((data) => {
      console.log('data ' + data.data.length);
      this.items = data.data;
    }, (err) => {
      console.log('err ' + err);
    });
  }
  categorySelector(_index, elem) {
    // elem.target.scrollTo = 236
    this.activeCategory = _index;
    // let el = document.getElementById(_index);
    // el.scrollIntoView();
  }
  ngOnInit() {
    this.getCategories();
    this.getItems();
    this.itemsService.filterItems.subscribe((text) => {
      this.searchItem = text;
    });
  }

}
