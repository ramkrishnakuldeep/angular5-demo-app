import { Component, OnInit } from '@angular/core';
import { ItemDetailsService } from '../services/item-details.service';
import { ItemDetailsData } from './item-details-model';
import { ItemDetails } from './iItemDetails';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  itemDetails: ItemDetails;
  constructor(private itemDetailService: ItemDetailsService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.itemDetails = new ItemDetailsData(this.route.snapshot.data.itemsData).details;
    this.itemDetailService.showItemDetailHeader(true, this.itemDetails.name);
  }

}
