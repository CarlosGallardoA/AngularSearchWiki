import { Component, Input, OnInit } from '@angular/core';
import { WikipediaSearch } from '../search/interface/wikipedia.interface';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: WikipediaSearch;

  constructor() {}

  ngOnInit(): void {}
}
