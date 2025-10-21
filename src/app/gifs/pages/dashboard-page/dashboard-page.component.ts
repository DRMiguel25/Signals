// Archivo: ./gifs/pages/dashboard-page/dashboard-page.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-dashboard',
  standalone: true, // Asumimos standalone por el loadComponent en las rutas
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardComponent {
  // Solo actúa como layout contenedor
}