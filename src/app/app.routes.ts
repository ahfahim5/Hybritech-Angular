import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import {ContactUsComponent} from './contact-us/contact-us.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    {path : 'about', component: AboutUsComponent},
    {path : 'career', component: CareerComponent},
    {path : 'contact_us', component: ContactUsComponent}
];
