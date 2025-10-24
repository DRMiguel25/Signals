import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { environment } from '@environments/environment.development';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardComponent {
  envs = environment;
  
  // Estado para controlar la visibilidad del menú móvil
  public showSidebar = signal(false); 
  
  // Estado para controlar el modal de bienvenida
  public showWelcomeModal = signal(false);
  
  public toggleSidebar() {
    this.showSidebar.update(value => !value);
  }
  
  public openWelcomeModal() {
    this.showWelcomeModal.set(true);
  }
  
  public closeWelcomeModal() {
    this.showWelcomeModal.set(false);
  }
}
