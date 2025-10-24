import { Component, inject } from '@angular/core';
import { OptionMenuComponent } from '../option-menu/option-menu.component';
import { GiphyService } from '../../../services/giphy.service';
import { environment } from '@environments/environment.development';

interface MenuOption {
  icon: string;
  title: string;
  subtitle: string;
  router: string;
}

@Component({
  selector: 'app-gifs-side-menu-options',
  standalone: true,
  imports: [OptionMenuComponent], 
  templateUrl: './gifs-side-menu-options.component.html',
  styleUrl: './gifs-side-menu-options.component.scss'
})
export class GifsSideMenuOptionsComponent {
  private readonly giphyService = inject(GiphyService);
  public envs = environment;

  public searchHistory = this.giphyService.history; 

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Trending',
      subtitle: 'Los mejores GIFs',
      router: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: 'Search',
      subtitle: 'Busca tus GIFs favoritos',
      router: '/dashboard/search'
    },
  ];

  searchFromHistory(term: string): void {
    this.giphyService.searchFromHistory(term);
  }

  clearHistory(): void {
    this.giphyService.clearHistory();
  }
}