import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

@Injectable()
export class ItemDetailsService {
  public itemDetailsUrl = environment.apiEndpoint + 'items';
  @Output() toggleHeaderBar: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getItemDetails(itemId): Observable<any> {
    return this.http.get(this.itemDetailsUrl + '/' + itemId).map((res: Response) => res);
  }

  showItemDetailHeader(_toogle, _name) {
    this.toggleHeaderBar.emit({val: _toogle, name: _name});
  }

}
