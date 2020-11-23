import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawHomeComponent } from './draw-home/draw-home.component';
import { DrawRoutingModule } from './draw-routing.module';

@NgModule({
  declarations: [DrawHomeComponent],
  imports: [CommonModule, DrawRoutingModule],
})
export class DrawModule {}
