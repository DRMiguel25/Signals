// Archivo: ./gifs/components/search-box/search-box.component.ts

import { Component, output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  // 🚨 CORRECTO: NO DEBE IMPORTAR NADA aquí, es un componente atómico.
  imports: [], 
  template: `
    <div class="w-full">
      <input
        #txtQuery
        type="text"
        placeholder="Buscar GIFs..."
        class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-800"
        (keyup.enter)="onSearch(txtQuery.value)"
      />
    </div>
  `
})
// 🚨 CLASE CORRECTA: Asegúrate de que se llame SearchBoxComponent
export class SearchBoxComponent {
  // Define un output para emitir el texto de búsqueda
  public onSearchEmit = output<string>();

  onSearch(query: string): void {
    // Si la caja está vacía o solo tiene espacios, no hace nada
    if (!query.trim()) {
      return;
    }
    this.onSearchEmit.emit(query);
  }
}