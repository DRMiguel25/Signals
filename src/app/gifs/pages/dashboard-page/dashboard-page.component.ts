import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardComponent {
  // Estado para controlar la visibilidad del menú móvil
  public showSidebar = signal(false); 
  
  public toggleSidebar() {
    this.showSidebar.update(value => !value);
  }
}