import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },

      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/cart/cart.module').then(m => m.CartPageModule)
          }
        ]
      },

      {
        path: 'tracking',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/tracking/tracking.module').then(m => m.TrackingPageModule)
          }
        ]
      },

      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },

      {
        path: 'restaurant',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/restaurant/restaurant.module').then(m => m.RestaurantPageModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
