import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsComponent } from './posts.component';
import { DatePipe } from '@angular/common';
import { NewsService } from '../../../common/services/news.service';
import { of } from 'rxjs';


describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let newsService: NewsService;
  let datePipe: DatePipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      imports: [HttpClientTestingModule],
      providers: [DatePipe, NewsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#subcribeToNewsHeadLines', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(PostsComponent);
      newsService = fixture.debugElement.injector.get(NewsService);
      datePipe = fixture.debugElement.injector.get(DatePipe);
      component = new PostsComponent(newsService, datePipe);
    });
    it('should get top headlines news', () => {
      // Arrange
      const articles = {articles: [{ title: 'testin', author: 'testing'}]};
      const topHeadLinesSpy = spyOn(newsService, 'getTopHeadLines').and.returnValue(of(articles));
      // Act
      component.subcribeToNewsHeadLines();
      // Expect
      expect(component.topHeadlines.length).toEqual(1);
      expect(component.articles.length).toEqual(1);
      expect(topHeadLinesSpy).toHaveBeenCalled();
      expect(topHeadLinesSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('#onSearchByKeyWord', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(PostsComponent);
      newsService = fixture.debugElement.injector.get(NewsService);
      datePipe = fixture.debugElement.injector.get(DatePipe);
      component = new PostsComponent(newsService, datePipe);
    });
    it('should get headlines by a keyword', () => {
      // Arrange
      const articles = {articles: [{ title: 'testin', author: 'testing'}]};
      const spy = spyOn(newsService, 'searchArticles').and.returnValue(of(articles));
      const mockValue = 'testing';
      const event = {target: {id: 'test', value: mockValue}, toLowerCase(): string {return mockValue.toLowerCase(); }};
      component.dateInput = {value: '2020/20/20'};
      // Act
      component.onSearchByKeyWord(event);
      // Expect
      expect(component.articles.length).toEqual(1);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('with empty value should get top headlines', () => {
      // Arrange
      const articles = {articles: [{ title: 'testin', author: 'testing'}]};
      const spy = spyOn(newsService, 'searchArticles').and.returnValue(of(articles));
      const event = {target: {id: 'test', value: ''}, toLowerCase(): string {return ''; }};
      // Act
      component.onSearchByKeyWord(event);
      // Expect
      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('#onSearchByDate', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(PostsComponent);
      newsService = fixture.debugElement.injector.get(NewsService);
      datePipe = fixture.debugElement.injector.get(DatePipe);
      component = new PostsComponent(newsService, datePipe);
    });
    it('should get headlines by selected date', () => {
       // Arrange
       const articles = {articles: [{ title: 'testin', author: 'testing'}]};
       const spy = spyOn(newsService, 'searchArticles').and.returnValue(of(articles));
       const date: any = { value : new Date('10/03/2019') };
       component.onSearchByDate(date);
       // Expect
       expect(component.articles.length).toEqual(1);
       expect(spy).toHaveBeenCalled();
       expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
