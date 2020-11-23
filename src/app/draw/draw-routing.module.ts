import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawHomeComponent } from './draw-home/draw-home.component';
const routes: Routes = [
  {
    path: '',
    component: DrawHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawRoutingModule {}
