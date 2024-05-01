import { Routes } from '@angular/router';
import { CarousalComponent } from './components/carousal/carousal.component';
import { PrebookingDetailsComponent } from './components/prebooking-details/prebooking-details.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', title:'Game lists', component: CarousalComponent},
    {path: 'prebooking-details', title:'Prebooking', component: PrebookingDetailsComponent},
];
