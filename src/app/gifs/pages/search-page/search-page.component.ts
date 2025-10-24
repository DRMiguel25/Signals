import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiphyService } from '../../services/giphy.service';

interface CategoryFilter {
  id: string;
  label: string;
  searchTerm: string;
}

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent implements OnInit {
  
  searchTerm: string = '';
  currentCategory: string = 'all';

  categories: CategoryFilter[] = [
    { id: 'all', label: 'Todas las categorías', searchTerm: '' },
    { id: 'funny', label: 'Divertidos', searchTerm: 'funny' },
    { id: 'reactions', label: 'Reacciones', searchTerm: 'reactions' },
    { id: 'animals', label: 'Animales', searchTerm: 'animals' },
    { id: 'sports', label: 'Deportes', searchTerm: 'sports' },
    { id: 'memes', label: 'Memes', searchTerm: 'memes' }
  ];

  // Computed signals para acceder a los datos del servicio
  gifs = computed(() => this.giphyService.gifs());
  loading = computed(() => this.giphyService.loading());

  constructor(public giphyService: GiphyService) {}

  ngOnInit() {
    // Cargar trending al inicio
    this.giphyService.getTrendingGifs();
  }

  searchGifs() {
    if (this.searchTerm.trim() === '') {
      this.giphyService.getTrendingGifs();
      return;
    }

    this.giphyService.searchGifs(this.searchTerm);
  }

  filterByCategory(category: CategoryFilter) {
    this.currentCategory = category.id;
    
    if (category.searchTerm === '') {
      this.searchTerm = '';
      this.giphyService.getTrendingGifs();
    } else {
      this.searchTerm = category.searchTerm;
      this.giphyService.searchGifs(category.searchTerm);
    }
  }

  getColumn(columnIndex: number) {
    const allGifs = this.gifs();
    return allGifs.filter((_, index) => index % 4 === columnIndex);
  }
}
