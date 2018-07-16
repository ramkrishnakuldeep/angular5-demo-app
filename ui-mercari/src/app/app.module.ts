import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { HeaderComponent } from './header/header.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsService } from './services/items.service';
import { CategoryService } from './services/category.service';
import { ItemDetailsService } from './services/item-details.service';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemDetailResolver } from './item-details/item-detail-resolver';
import { ItemFilter } from './items/item-filter';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HeaderComponent,
    ItemDetailsComponent,
    ItemCardComponent,
    ItemFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    Angular2FontawesomeModule
  ],
  providers: [
    CategoryService,
    ItemsService,
    ItemDetailsService,
    ItemDetailResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
