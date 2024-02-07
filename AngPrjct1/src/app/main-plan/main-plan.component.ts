import { Component } from '@angular/core';
import { GusetRComponent } from '../guset-r/guset-r.component';
import { DineRComponent } from '../dine-r/dine-r.component';
import { PrayRComponent } from '../pray-r/pray-r.component';
import { MasterRComponent } from '../master-r/master-r.component';
import { BedRComponent } from '../bed-r/bed-r.component';
import { KitRComponent } from '../kit-r/kit-r.component';
import { BathRComponent } from '../bath-r/bath-r.component';

@Component({
  selector: 'app-main-plan',
  standalone: true,
  imports: [GusetRComponent,DineRComponent,PrayRComponent,MasterRComponent,BedRComponent,KitRComponent,BathRComponent],
  templateUrl: './main-plan.component.html',
  styleUrl: './main-plan.component.css'
})
export class MainPlanComponent {

}
