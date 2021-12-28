import { Component } from '@angular/core';
import { Observable, tap, withLatestFrom } from 'rxjs';
import { WikipediaSearch } from './pages/search/interface/wikipedia.interface';
import { SearchService } from './pages/search/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  articles$!: Observable<WikipediaSearch[]>;
  constructor(private readonly searchSvc: SearchService) {}
  onSearch(term: string): void {
    this.articles$ = this.searchSvc.search(term);
  }
}
