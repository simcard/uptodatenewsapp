import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Source } from '../../../app/model/source';
import { Article } from '../../../app/model/article';
import { BaseComponent } from '../base/base.component';
import { NewsService } from '../../../common/services/news.service';


@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent extends BaseComponent implements OnInit {
  @Input()  openSidenav: boolean;
  @Output() sourceArticles = new EventEmitter<Array<Article>>();
  sources: Array<Source>;
  articles: Array<Article>;
  resetForm: boolean;

  constructor(private newsApiService: NewsService) {
    super();
   }

  ngOnInit() {
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
    this.newsApiService.getArticlesBySourceId(source).subscribe(data => {
      this.articles = data['articles'];
      this.sourceArticles.emit(this.articles);
    });
    this.resetForm = true;
  }
}
