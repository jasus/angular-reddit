import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() public article: Article;

  public votes: number;

  constructor() {
  }

  ngOnInit() {
  }

  public voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  public voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
