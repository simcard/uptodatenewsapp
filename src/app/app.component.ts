import { Component, OnInit } from '@angular/core';
import { NewsService } from '../common/services/news.service';
import { BaseComponent } from './component/base/base.component';
import { Source } from './model/source';
import { Article } from './model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends BaseComponent implements OnInit {
  title = 'news-app';
  sources: Array<Source>;
  articles: Array<Article>;
  resetForm: boolean;

  constructor(private newsApiService: NewsService) {
    super();
  }

  ngOnInit(){
    this.subcribeToNewsSource();
  }

  subcribeToNewsSource(){
    this.serviceSubscription.push(this.newsApiService.getSources()
    .subscribe(data => {
      this.sources = data['sources'];
    }
    ));
  }

  searchArticlesBySourceId(source){
    this.newsApiService.getArticlesBySourceId(source).subscribe(data => this.articles = data['articles']);
    this.resetForm = true;

  }
}
