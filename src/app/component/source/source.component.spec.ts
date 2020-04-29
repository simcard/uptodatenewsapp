/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SourceComponent } from './source.component';
import { NewsService } from 'src/common/services/news.service';
import { of } from 'rxjs/internal/observable/of';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SourceComponent', () => {
  let component: SourceComponent;
  let fixture: ComponentFixture<SourceComponent>;
  let newsService: NewsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule
      ],
      declarations: [ SourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#subcribeToNewsSource' , () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(SourceComponent);
      newsService = fixture.debugElement.injector.get(NewsService);
      component = new SourceComponent(newsService);
    });
    it('should return news sources', () => {
      // Arrange
      const sources = {sources: [{ id: 'cnc', name: 'testing'}]};
      const getSourcesSpy = spyOn(newsService, 'getSources').and.returnValue(of(sources));
      // Act
      component.subcribeToNewsSource();
      // Expect
      expect(component.sources.length).toEqual(1);
      expect(getSourcesSpy).toHaveBeenCalled();
      expect(getSourcesSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('#searchArticles', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(SourceComponent);
      newsService = fixture.debugElement.injector.get(NewsService);
      component = new SourceComponent(newsService);
    });
    it('should return list of articles', () => {
      // Arrange
      const articles = {articles: [{ title: 'testin', author: 'testing'}]};
      const getArticlesSpy = spyOn(newsService, 'getArticlesBySourceId').and.returnValue(of(articles));
      // Act
      component.searchArticlesBySourceId('testing');
      // Axpect
      expect(component.articles.length).toEqual(1);
      expect(getArticlesSpy).toHaveBeenCalled();
      expect(getArticlesSpy).toHaveBeenCalledTimes(1);
    });
  });
});
