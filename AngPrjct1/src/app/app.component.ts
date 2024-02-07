import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPlanComponent } from './main-plan/main-plan.component';
import { GusetRComponent } from './guset-r/guset-r.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainPlanComponent,GusetRComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'AngPrjct1';
  name: string = "Sura";
  clicked = () =>{
    alert("Hallo")
  }
  email: string = "";
}
