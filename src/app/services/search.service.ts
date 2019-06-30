import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() {}

  private SearchItem = new Subject<String>();
  serachItems$ = this.SearchItem.asObservable();

  private tabClickItem = new Subject<String>();
  tabClickItems$ = this.tabClickItem.asObservable();

  Search(message: String) {
    this.SearchItem.next(message);
  }
  onTabClickSearch(event: String) {
    this.tabClickItem.next(event);
  }
}
