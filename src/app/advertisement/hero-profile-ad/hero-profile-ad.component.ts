import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hero-profile-ad',
  templateUrl: './hero-profile-ad.component.html',
  styleUrls: ['./hero-profile-ad.component.scss']
})
export class HeroProfileAdComponent {

  @Input() data: { name: string, title: string};

}
