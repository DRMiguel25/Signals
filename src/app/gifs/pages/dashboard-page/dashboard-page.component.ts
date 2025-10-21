import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { signal } from '@angular/core'; // 🚨 Importar signal

@Component({
  selector: 'app-dashboard',
  standalone: true, // Asumimos standalone
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardComponent {
  // 🚨 Estado para controlar si el menú está visible (false por defecto en móvil)
  public showSidebar = signal(false); 
  
  // 🚨 Función para alternar la visibilidad
  public toggleSidebar() {
    this.showSidebar.update(value => !value);
  }
}