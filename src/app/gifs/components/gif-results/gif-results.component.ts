import { Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import { GifCardComponent } from '../gif-card/gif-card.component';

@Component({
  selector: 'app-gif-results',
  imports: [GifCardComponent],
  template: `
    @if (loading()) {
      <div class="flex justify-center items-center min-h-[400px]">
        <div class="text-center">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p class="mt-4 text-gray-600">Cargando GIFs...</p>
        </div>
      </div>
    } @else if (gifs().length === 0) {
      <div class="flex justify-center items-center min-h-[400px]">
        <div class="text-center text-gray-500">
          <p class="text-xl">No se encontraron resultados</p>
          <p class="mt-2">Intenta con otra búsqueda</p>
        </div>
      </div>
    } @else {
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        @for (gif of gifs(); track gif.id) {
          <app-gif-card [gif]="gif" />
        }
      </div>
    }
  `
})
export class GifResultsComponent {
  public gifs = input.required<Gif[]>();
  public loading = input.required<boolean>();
}
