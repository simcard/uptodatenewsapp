import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NewsService } from '../../../common/services/news.service';
import { BaseComponent } from '../base/base.component';
import { Article } from '../../../app/model/article';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent extends BaseComponent implements OnInit {
  @ViewChild('dateInput', {read: MatInput}) dateInput;
  @ViewChild('searchInput', {read: MatInput}) searchInput;
  @Input()articles: Array<Article>;

  topHeadlines: Article[];
  private keyword: string = null;

  constructor(private newsApiService: NewsService, private datePipe: DatePipe) {
    super();
  }

  ngOnInit() {
    this.subcribeToNewsHeadLines();
  }

  subcribeToNewsHeadLines(){
    this.serviceSubscription.push(this.newsApiService.getTopHeadLines()
    .subscribe(data => {
      this.articles = data['articles'];
      this.topHeadlines = this.articles;
    }
    ));
  }

  onSearchByKeyWord(event) {
    const isEvent = event instanceof Event;
    const value = isEvent ? event.target.value.toLowerCase() : event.toLowerCase();
    if (value) {
      this.keyword = value;
      this.dateInput.value = null;
      this.subscribeToArticles(this.keyword);
    } else {
      this.keyword = null;
      this.articles = [];
      this.articles = this.topHeadlines;
    }
  }

  onSearchByDate(dateSelected: MatDatepickerInputEvent<Date>) {
      this.subscribeToArticles(this.keyword, this.transformDate(dateSelected.value));
  }

  private subscribeToArticles(keyword: string, date: string = null) {
    this.serviceSubscription.push(this.newsApiService.searchArticles(keyword, date)
    .subscribe(data => {
      this.articles = data['articles'];
     }));
  }

  private transformDate(date: Date){
    return this.datePipe.transform(date.toString(), 'yyyy-MM-dd');
  }
}
