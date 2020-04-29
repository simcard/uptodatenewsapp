import { Component, OnInit } from '@angular/core';
import { Article } from '../../../app/model/article';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  openSidenav = false;
  articles: Array<Article>;

  constructor() { }


  ngOnInit() {
  }

  toggleSidenav(){
    this.openSidenav = !this.openSidenav;
  }

  onSourceArticle(articles: Article[]){
   this.articles = articles;
   this.openSidenav = false;
  }
}
