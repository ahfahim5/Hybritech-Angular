import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { ClientSectionComponent } from "./client-section/client-section.component";
import { Banner2Component } from "./banner-2/banner-2.component";
import { DynamicTeamComponent } from "./dynamic-team/dynamic-team.component";
import { DeliveringImpactComponent } from "./delivering-impact/delivering-impact.component";
import { DevelopSmartComponent } from "./develop-smart/develop-smart.component";
import { FAQComponent } from "../faq/faq.component";
import { FormComponent } from "../form/form.component";


@Component({
  selector: 'app-home',
  imports: [BannerComponent, ClientSectionComponent, Banner2Component, DynamicTeamComponent, DeliveringImpactComponent, DevelopSmartComponent, FAQComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
