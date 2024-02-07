import { Component } from '@angular/core';
import { BathRComponent } from '../bath-r/bath-r.component';

@Component({
  selector: 'app-master-r',
  standalone: true,
  imports: [BathRComponent],
  templateUrl: './master-r.component.html',
  styleUrl: './master-r.component.css'
})
export class MasterRComponent {

}
