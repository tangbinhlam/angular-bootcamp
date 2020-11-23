import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import {AdvertisementRouting} from './advertisement-routing.module';
import { AdDirective } from './ad.directive';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileAdComponent } from './hero-profile-ad/hero-profile-ad.component';
import {AdService} from './ad.service';

@NgModule({
  declarations: [AdBannerComponent, AdDirective, HeroJobAdComponent, HeroProfileAdComponent],
  imports: [
    CommonModule,
    AdvertisementRouting,
  ],
  providers: [AdService]
})
export class AdvertisementModule { }
