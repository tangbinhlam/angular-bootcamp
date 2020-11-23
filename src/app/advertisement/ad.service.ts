import {Injectable} from '@angular/core';
import {AdItem} from './ad-item';
import {HeroJobAdComponent} from './hero-job-ad/hero-job-ad.component';
import {HeroProfileAdComponent} from './hero-profile-ad/hero-profile-ad.component';

const mockData: AdItem[] = [
  {
    component: HeroProfileAdComponent,
    data: {
      name: 'Lam Tang',
      title: 'Sr Associate - Project',
    }
  },
  {
    component: HeroProfileAdComponent,
    data: {
      name: 'Hoai Tang',
      title: 'Dev Ops',
    }
  },
  {
    component: HeroJobAdComponent,
    data: {
      headline: 'Openings in all departments',
      body: 'Apply today',
    }
  },
  {
    component: HeroJobAdComponent,
    data: {
      headline: 'Hiring for several positions',
      body: 'Submit your resume today!',
    }
  },
];


@Injectable()
export class AdService {

  getAds(): AdItem[] {
    return mockData;
  }
}
