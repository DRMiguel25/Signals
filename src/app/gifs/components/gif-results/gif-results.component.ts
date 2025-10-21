import { Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import { GifCardComponent } from '../gif-card/gif-card.component';
import { CommonModule } from '@angular/common'; // Asegúrate de que CommonModule esté importado si aún no está, aunque las nuevas sintaxis no lo requieran, es buena práctica.

@Component({
  selector: 'app-gif-results',
  standalone: true, // Asegurando que sea standalone
  // 🚨 CORRECCIÓN: Agregar CommonModule si no está implícito (por seguridad al usar @if/@for)
  imports: [GifCardComponent, CommonModule], 
  template: `
    @if (loading()) {
      <div class="flex justify-center items-center min-h-[400px]">
        <div class="text-center">
          <!-- Indicador de carga visible -->
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p class="mt-4 text-gray-600">Cargando GIFs...</p>
        </div>
      </div>
    } @else if (gifs().length === 0) {
      <div class="flex justify-center items-center min-h-[400px] p-4">
        <div class="text-center text-gray-500">
          <p class="text-2xl font-semibold">No se encontraron resultados 😔</p>
          <p class="mt-2 text-lg">Intenta con otra búsqueda</p>
        </div>
      </div>
    } @else {
      <!-- 🚨 CORRECCIÓN: Ajuste de columnas para mayor densidad y mejor responsividad -->
      <div class="grid 
                  grid-cols-2    /* Móvil: 2 columnas */
                  sm:grid-cols-3 /* Tablet: 3 columnas */
                  md:grid-cols-4 /* Desktop: 4 columnas */
                  lg:grid-cols-5 /* Desktop Grande: 5 columnas */
                  gap-4 p-4"> <!-- Aseguramos el padding y el espacio entre ítems -->
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