import { Component, inject, OnInit } from '@angular/core';
import { GifResultsComponent } from '../../components/gif-results/gif-results.component';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-trending-page',
  imports: [GifResultsComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.scss'
})
export class TrendingPageComponent implements OnInit {
  private readonly giphyService = inject(GiphyService);

  public gifs = this.giphyService.gifs;
  public loading = this.giphyService.loading;

  ngOnInit(): void {
    this.giphyService.getTrendingGifs();
  }
}
