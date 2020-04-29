/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomeComponent } from './home.component';
import { Article } from '../../../app/model/article';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#toggleSidenav', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = new HomeComponent();
    });
    it ('should toggle side nav', () => {
      // Arrange
      component.openSidenav = true;
      // Act
      component.toggleSidenav();
      // Axpect
      expect(component.openSidenav).toBe(false);
    });
  });

  describe('#onSourceArticle', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = new HomeComponent();
    });
    it ('should toggle side nav', () => {
      // Arrange
      const articles  =  { author: 'testing',
        content: 'testing',
        description: 'testing',
        publishedAt: new Date(),
        title: 'title',
        url: 'url',
        urlToImage: 'image'} as Article;
      component.articles = [];
      // Act
      component.onSourceArticle([articles]);
      // Axpect
      expect(component.articles.length).toEqual(1);
    });
  });
});
