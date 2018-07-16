import { Injectable, Output, EventEmitter} from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';


@Injectable()
export class ItemsService {
  public itemsUrl = environment.apiEndpoint + 'items';
  @Output() filterItems: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) {}

  getItemList(): Observable<any> {
    return this.http.get(this.itemsUrl).map((res: Response) => res);
  }

  searchItem(searchText) {
    this.filterItems.emit(searchText);
  }

}
