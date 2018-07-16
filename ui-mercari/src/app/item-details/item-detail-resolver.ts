
import { Injectable } from '@angular/core';
import { ItemDetailsService } from '../services/item-details.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class ItemDetailResolver implements Resolve<any> {
    constructor(private itemDetailService: ItemDetailsService) { }
    resolve(route: ActivatedRouteSnapshot) {
        console.log('sss ' + route.params.id);
        return this.itemDetailService.getItemDetails(route.params.id).catch(() => {
            return Observable.of('data not available at this time');
        });
    }

}
