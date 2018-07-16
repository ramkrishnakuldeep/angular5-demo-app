import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemDetailResolver } from './item-details/item-detail-resolver';

const routes: Routes = [
  { path: 'items', component: ItemsComponent},
  { path: 'items/:id', component: ItemDetailsComponent, resolve: {itemsData: ItemDetailResolver}},
  { path: '', redirectTo: '/items', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
