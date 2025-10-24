import { Component, output } from '@angular/core';
import { environment } from '@environments/environment.development';

@Component({
  selector: 'app-gifs-side-menu-header',
  imports: [],
  templateUrl: './gifs-side-menu-header.component.html',
  styleUrl: './gifs-side-menu-header.component.scss'
})
export class GifsSideMenuHeaderComponent {
  envs = environment;
  
  // Output para emitir el evento al componente padre
  openModal = output<void>();
  
  onUserClick() {
    this.openModal.emit();
  }
}
