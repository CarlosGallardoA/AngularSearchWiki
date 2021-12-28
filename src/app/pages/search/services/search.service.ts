import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  WikipediaResponse,
  WikipediaSearch,
} from '../interface/wikipedia.interface';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private readonly http: HttpClient) {}

  search(term: string): Observable<WikipediaSearch[]> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: term,
      utf8: '1',
      srlimit: 20,
      origin: '*',
    };
    return this.http
      .get<WikipediaResponse>(environment.api, { params })
      .pipe(pluck('query', 'search'));
  }
}
