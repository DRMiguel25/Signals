import { Component, inject, signal, input } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { GifCardComponent } from '../gif-card/gif-card.component';
import { Gif } from '../../interfaces/gif.interface';

interface CategoryFilter {
  id: string;
  label: string;
  searchTerm: string;
}

@Component({
  selector: 'app-gif-results',
  standalone: true,
  imports: [GifCardComponent],
  templateUrl: './gif-results.component.html'
})
export class GifResultsComponent {
  private giphyService = inject(GiphyService);
  
  // Inputs requeridos como antes
  public gifs = input.required<Gif[]>();
  public loading = input.required<boolean>();
  
  public selectedCategory = signal<string>('all');

  categories: CategoryFilter[] = [
  { id: 'all', label: 'Todas las categorías', searchTerm: '' },
  { id: 'funny', label: 'Divertidos', searchTerm: 'divertidos' },
  { id: 'reactions', label: 'Reacciones', searchTerm: 'reacciones' },
  { id: 'animals', label: 'Animales', searchTerm: 'animales' },
  { id: 'sports', label: 'Deportes', searchTerm: 'deportes' },
  { id: 'memes', label: 'Memes', searchTerm: 'memes' }
];


  selectCategory(category: CategoryFilter): void {
    this.selectedCategory.set(category.id);
    
    if (category.id === 'all') {
      this.giphyService.getTrendingGifs();
    } else {
      this.giphyService.searchGifs(category.searchTerm);
    }
  }

  isSelected(categoryId: string): boolean {
    return this.selectedCategory() === categoryId;
  }
}