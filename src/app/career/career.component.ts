import { Component } from '@angular/core';
import { CareerBannerComponent } from "./career-banner/career-banner.component";
import { BenfitsComponent } from "./benfits/benfits.component";
import { DynamicPeopleComponent } from "./dynamic-people/dynamic-people.component";
import { CurrentOpeningComponent } from "./current-opening/current-opening.component";

@Component({
  selector: 'app-career',
  imports: [CareerBannerComponent, BenfitsComponent, DynamicPeopleComponent, CurrentOpeningComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {

}
