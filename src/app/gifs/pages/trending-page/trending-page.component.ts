import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Gif {
  url: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-trending-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.scss'
})
export class TrendingPageComponent implements OnInit {
  
  currentCategory: string = 'all';

  allGifs: Gif[] = [
    { url: 'https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif', title: 'Chicken Wings Hot Ones GIF', category: 'funny' },
    { url: 'https://media.giphy.com/media/3o7absbD7PbTFQa0c8/giphy.gif', title: 'Happy Star Wars GIF by Salih', category: 'funny' },
    { url: 'https://media.giphy.com/media/l0HlMr2G3EKFgpUY0/giphy.gif', title: 'Fortune Try Again GIF', category: 'reactions' },
    { url: 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif', title: 'Good Night Cat GIF', category: 'animals' },
    { url: 'https://media.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.gif', title: 'I Love You Flower GIF', category: 'reactions' },
    { url: 'https://media.giphy.com/media/8Iv5lqKwKsZ2g/giphy.gif', title: 'Season 3 Thank You GIF by T', category: 'reactions' },
    { url: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif', title: 'Happy Sesame Street GIF', category: 'funny' },
    { url: 'https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif', title: 'Happy Lets Go GIF by Holler', category: 'reactions' },
    { url: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif', title: 'Sad Cry GIF by MOODMAN', category: 'reactions' },
    { url: 'https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif', title: 'Time For Bed Ok GIF', category: 'memes' },
    { url: 'https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif', title: 'Basketball Dunk', category: 'sports' },
    { url: 'https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif', title: 'Soccer Goal Celebration', category: 'sports' }
  ];

  filteredGifs: Gif[] = [];

  ngOnInit() {
    this.filteredGifs = [...this.allGifs];
  }

  filterByCategory(category: string) {
    this.currentCategory = category;
    
    if (category === 'all') {
      this.filteredGifs = [...this.allGifs];
    } else {
      this.filteredGifs = this.allGifs.filter(gif => gif.category === category);
    }
  }

  getColumn(columnIndex: number): Gif[] {
    return this.filteredGifs.filter((_, index) => index % 4 === columnIndex);
  }
}
