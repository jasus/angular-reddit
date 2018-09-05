import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reddit';
  public articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 1),
      new Article('Fullstack', 'http://fullstack.io', 9),
      new Article('Angular Homepage', 'http://angular.io', 5),
    ];
  }

  public addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(title.value + link.value);

    this.articles.push(new Article(title.value, link.value , 0));
    title.value = '';
    link.value = '';

    return false;
  }

  public getArticlesSorted(field: string) {
    return this.articles.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
