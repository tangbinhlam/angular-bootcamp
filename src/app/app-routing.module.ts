import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'draw.io',
    loadChildren: () => import('./draw/draw.module').then((m) => m.DrawModule),
  },
  {
    path: 'ad',
    loadChildren: () => import('./advertisement/advertisement.module').then(m => m.AdvertisementModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
