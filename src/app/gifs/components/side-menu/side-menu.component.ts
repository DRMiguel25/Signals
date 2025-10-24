import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsSideMenuHeaderComponent } from './side-menu-header/gifs-side-menu-header.component';
import { GifsSideMenuOptionsComponent } from './side-menu-options/gifs-side-menu-options.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, GifsSideMenuHeaderComponent, GifsSideMenuOptionsComponent],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  // Output para propagar el evento al componente padre (dashboard)
  openModal = output<void>();
}
