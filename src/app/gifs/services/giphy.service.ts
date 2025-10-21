import { Injectable, inject, signal, computed, effect } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GiphyResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private readonly http = inject(HttpClient);
  private readonly apiKey = 'kWgSWZYpwtzlspzvbW8nRpluoKThxcH4';
  private readonly apiUrl = 'https://api.giphy.com/v1/gifs';
  private readonly localStorageKey = 'giphy-history';

  private _gifs = signal<Gif[]>([]);
  private _history = signal<string[]>(this.loadHistoryFromStorage());
  private _loading = signal<boolean>(false);
  private _currentSearchTerm = signal<string>('');

  public readonly gifs = this._gifs.asReadonly();
  public readonly history = this._history.asReadonly();
  public readonly loading = this._loading.asReadonly();
  public readonly currentSearchTerm = computed(() => this._currentSearchTerm());

  constructor() {
    effect(() => {
      const currentHistory = this._history();
      localStorage.setItem(this.localStorageKey, JSON.stringify(currentHistory));
    });
  }

  searchGifs(query: string): void {
    const normalizedQuery = this.normalizeQuery(query);

    if (!normalizedQuery || normalizedQuery.length === 0) {
      return;
    }

    this._currentSearchTerm.set(normalizedQuery);
    this._loading.set(true);

    this.addToHistory(normalizedQuery);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', normalizedQuery)
      .set('limit', '20');

    this.http.get<GiphyResponse>(`${this.apiUrl}/search`, { params })
      .subscribe({
        next: (response) => {
          this._gifs.set(response.data);
          this._loading.set(false);
        },
        error: (error) => {
          console.error('Error fetching GIFs:', error);
          this._gifs.set([]);
          this._loading.set(false);
        }
      });
  }

  getTrendingGifs(): void {
    this._currentSearchTerm.set('trending');
    this._loading.set(true);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '20');

    this.http.get<GiphyResponse>(`${this.apiUrl}/trending`, { params })
      .subscribe({
        next: (response) => {
          this._gifs.set(response.data);
          this._loading.set(false);
        },
        error: (error) => {
          console.error('Error fetching trending GIFs:', error);
          this._gifs.set([]);
          this._loading.set(false);
        }
      });
  }

  searchFromHistory(term: string): void {
    this.searchGifs(term);
  }

  clearHistory(): void {
    this._history.set([]);
    localStorage.removeItem(this.localStorageKey);
  }

  private normalizeQuery(query: string): string {
    return query.trim().toLowerCase();
  }

  private addToHistory(term: string): void {
    const currentHistory = this._history();

    if (currentHistory.includes(term)) {
      return;
    }

    const newHistory = [term, ...currentHistory].slice(0, 10);
    this._history.set(newHistory);
  }

  private loadHistoryFromStorage(): string[] {
    try {
      const stored = localStorage.getItem(this.localStorageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading history from localStorage:', error);
      return [];
    }
  }
}
