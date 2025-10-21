import { Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gif-card',
  standalone: true,
  imports: [],
  template: `
    <!-- 🚨 ESTÉTICA: Añadimos 'rounded-xl' y 'hover:scale-[1.02]' para un efecto visual -->
    <div class="bg-white rounded-xl shadow-lg overflow-hidden 
                hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
      <img
        [src]="gif().images.downsized_medium.url"
        [alt]="gif().title || 'GIF animado'"
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
    // Usamos un placeholder con mejor estética
    img.src = 'https://placehold.co/300x200/cccccc/333333?text=GIF+no+disponible'; 
    img.onerror = null; // Evita bucle infinito si el placeholder falla
  }
}
