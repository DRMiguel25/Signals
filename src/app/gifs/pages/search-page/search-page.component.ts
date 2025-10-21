// Archivo: ./gifs/pages/search-page/search-page.component.ts

import { Component, inject, OnInit } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { GifResultsComponent } from '../../components/gif-results/gif-results.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  // ¡Importa los componentes necesarios!
  imports: [SearchBoxComponent, GifResultsComponent], 
  template: `
    <div class="p-4 sm:p-0">
      <h2 class="text-3xl font-bold mb-6 text-gray-800">Búsqueda de GIFs</h2>
      
      <app-search-box 
        (onSearchEmit)="searchGifs($event)"
        class="block mb-8"
      />

      <app-gif-results 
        [gifs]="giphyService.gifs()" 
        [loading]="giphyService.loading()" 
      />
    </div>
  `,
})
export class SearchPageComponent implements OnInit {
  // Inyección del servicio Giphy
  public giphyService = inject(GiphyService);

  ngOnInit(): void {
    // Al cargar la página, muestra los trending GIFs si aún no hay resultados.
    if (this.giphyService.gifs().length === 0) {
      this.giphyService.getTrendingGifs();
    }
  }

  searchGifs(query: string): void {
    this.giphyService.searchGifs(query);
  }
}