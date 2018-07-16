import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

@Injectable()
export class CategoryService {
  public categoriesUrl = environment.apiEndpoint + 'categories';
  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<any> {
    return this.http.get(this.categoriesUrl).map((res: Response) => res);
  }

}
