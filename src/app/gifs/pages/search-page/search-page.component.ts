import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Gif {
  url: string;
  title: string;
  category: string;
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

  allGifs: Gif[] = [
    { url: 'https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif', title: 'Funny Chicken Wings', category: 'funny' },
    { url: 'https://media.giphy.com/media/3o7absbD7PbTFQa0c8/giphy.gif', title: 'Star Wars Celebration', category: 'funny' },
    { url: 'https://media.giphy.com/media/l0HlMr2G3EKFgpUY0/giphy.gif', title: 'Try Again Reaction', category: 'reactions' },
    { url: 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif', title: 'Good Night Cat', category: 'animals' },
    { url: 'https://media.giphy.com/media/8Iv5lqKwKsZ2g/giphy.gif', title: 'Thank You GIF', category: 'reactions' },
    { url: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif', title: 'Happy Sesame Street', category: 'funny' },
    { url: 'https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif', title: 'Lets Go Celebration', category: 'reactions' },
    { url: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif', title: 'Sad Cry Reaction', category: 'reactions' },
    { url: 'https://media.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.gif', title: 'I Love You Flower', category: 'reactions' },
    { url: 'https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif', title: 'Basketball Dunk', category: 'sports' },
    { url: 'https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif', title: 'Soccer Goal Celebration', category: 'sports' },
    { url: 'https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif', title: 'Confused Meme', category: 'memes' }
  ];

  filteredGifs: Gif[] = [];

  ngOnInit() {
    this.filteredGifs = [...this.allGifs];
  }

  searchGifs() {
    if (this.searchTerm.trim() === '') {
      this.filterByCategory(this.currentCategory);
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredGifs = this.allGifs.filter(gif => 
        gif.title.toLowerCase().includes(term)
      );
    }
  }

  filterByCategory(category: string) {
    this.currentCategory = category;
    this.searchTerm = '';
    
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
