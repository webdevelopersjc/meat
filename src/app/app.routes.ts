import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: './about/about.module.ts#AboutModule'},

  { path: 'restaurants/:id' , component: RestaurantDetailComponent,
children: [
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'reviews', component: ReviewsComponent}
]
},
  { path: 'restaurants', component: RestaurantsComponent},
  { path: 'order', loadChildren: './order/order.module.ts#OrderModule'},
  { path: 'order-summary', component: OrderSummaryComponent},
  { path: "**", component: NotFoundComponent}
]
