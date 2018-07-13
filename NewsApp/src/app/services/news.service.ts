import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  key = '705f1e507540492c9c2c70fb2be493a2';

  constructor(private http: Http) { }

  getTopHeadLines() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+this.key);
  }

  getNewsBySource(source) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey=' + this.key);
  }

  getSources() {
    return this.http.get('https://newsapi.org/v2/sources?apiKey='+this.key);
  }
}
