import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
private apiKey = 'f83902d678b147d6b80150d50127a513';

constructor(private http: HttpClient) { }

 getTopHeadLines() {
   const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + this.apiKey;
   return this.http.get(url);
 }

 getSources() {
  return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey);
 }

 getArticlesBySourceId(source: string) {
  const url = 'https://newsapi.org/v2/everything?q=null&sources=' + source + '&language=en&apiKey=' + this.apiKey;
  return this.http.get(url);
 }

 searchArticles(keyword: string, date: string) {
  const url = 'https://newsapi.org/v2/everything?q=' + keyword + '&from=' + date + '&to=' + date + '&language=en&apiKey=' + this.apiKey;
  return this.http.get(url);
 }

}
