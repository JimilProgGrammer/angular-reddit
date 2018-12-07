import { Article } from './article/article.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2','http://www.angular.io',10),
      new Article('Gazab Ganjedi','http://www.gazebganjedi.com',4),
      new Article('Fullstack','http://www.fullstack.io',5)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortArticles(): Article[] {
    return this.articles.sort
      ((a: Article, b: Article)=>b.votes - a.votes);
  }
}
