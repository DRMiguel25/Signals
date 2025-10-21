import { Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gif-card',
  imports: [],
  template: `
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        [src]="gif().images.downsized_medium.url"
        [alt]="gif().title"
        class="w-full h-48 object-cover"
        loading="lazy"
        (error)="onImageError($event)"
      />
      <div class="p-3">
        <h3 class="text-sm font-medium text-gray-800 truncate" [title]="gif().title">
          {{ gif().title || 'Sin título' }}
        </h3>
      </div>
    </div>
  `
})
export class GifCardComponent {
  public gif = input.required<Gif>();

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/300x200?text=Error+al+cargar+imagen';
  }
}
