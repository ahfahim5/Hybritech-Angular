import { Component } from '@angular/core';
import { BannerComponent } from "../home/banner/banner.component";
import { ServiceBanner1Component } from "./service-banner1/service-banner1.component";
import { FAQComponent } from "../faq/faq.component";
import { FooterComponent } from "../footer/footer.component";
import { FormComponent } from "../form/form.component";
import { OurServicesComponent } from "./our-services/our-services.component";

@Component({
  selector: 'app-services',
  imports: [ServiceBanner1Component, FAQComponent, FooterComponent, FormComponent, OurServicesComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
