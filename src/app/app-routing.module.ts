import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartPageComponent} from './components/pages/cart-page/cart-page.component';
import {FoodPageComponent} from './components/pages/food-page/food-page.component';
import {HomeComponent} from './components/pages/home/home.component';
import {FoodMenuComponent} from "./components/pages/food-menu/food-menu.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:searchTerm', component: FoodMenuComponent},
  {path: 'tag/:tag', component: FoodMenuComponent},
  {path: 'food/:id', component: FoodPageComponent},
  {path: 'cart-page', component: CartPageComponent},
  {path: 'food-menu', component: FoodMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
