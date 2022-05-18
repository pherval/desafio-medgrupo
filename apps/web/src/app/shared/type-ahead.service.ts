import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  switchMap,
} from 'rxjs';

type Predicate<T> = {
  (keyword: string, data: T): boolean;
};

@Injectable()
export class TypeAheadService<T> {
  keywords$: BehaviorSubject<string>;

  constructor() {
    this.keywords$ = new BehaviorSubject<string>('');
  }

  filter(
    observable: Observable<T[]>,
    predicate: Predicate<T>,
    time = 200
  ): Observable<T[]> {
    return this.keywords$.pipe(
      debounceTime(time),
      distinctUntilChanged(),
      switchMap((keyword) =>
        observable.pipe(
          map((data) =>
            data.filter((s) =>
              !keyword || keyword === '' ? true : predicate(keyword, s)
            )
          )
        )
      )
    );
  }

  type(keyword: string) {
    this.keywords$.next(keyword);
  }
}
