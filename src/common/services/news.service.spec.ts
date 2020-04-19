/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsService } from './news.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: News', () => {
  let newsService: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([NewsService], (service: NewsService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getTopHeadLines', () => {
     it('shoud return to headline', () => {
       // Arrange
       newsService = TestBed.get(NewsService);
       // Act
       newsService.getTopHeadLines().subscribe(data => {
      // Asset
      expect(data).toEqual({testing: 'testing'});
       });
     });
  });

  describe('#getArticlesByID', () => {
    it('shoud return news articles', () => {
      // Arrange
      newsService = TestBed.get(NewsService);
      // Act
      newsService.getArticlesBySourceId('sourceId').subscribe(data => {
     // Asset
     expect(data).toEqual({testing: 'testing'});
      });
    });
 });

  describe('#searchArticles', () => {
  it('shoud return news artilces', () => {
    // Arrange
    newsService = TestBed.get(NewsService);
    // Act
    newsService.searchArticles('keywordtesting', 'datetesting').subscribe(data => {
   // Asset
   expect(data).toEqual({testing: 'testing'});
    });
  });
});

  describe('#getSources', () => {
  it('shoud return news sources', () => {
    // Arrange
    newsService = TestBed.get(NewsService);
    // Act
    newsService.getTopHeadLines().subscribe(data => {
   // Asset
   expect(data).toEqual({testing: 'testing'});
    });
  });
 });
});
