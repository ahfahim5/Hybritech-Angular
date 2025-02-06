import { Component } from '@angular/core';
import { AboutUsBannerComponent } from "./about-us-banner/about-us-banner.component";
import { MakeDefrentComponent } from "./make-defrent/make-defrent.component";
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-about-us',
  imports: [AboutUsBannerComponent, MakeDefrentComponent, FormComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
