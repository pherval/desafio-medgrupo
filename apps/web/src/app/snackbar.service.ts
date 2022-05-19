import { EventEmitter, Injectable } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';

export type SnackbarMessage = {
  text: string;
  theme?: string;
};

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private open$: Subject<boolean>;
  private _message$: Subject<SnackbarMessage>;

  constructor() {
    this.open$ = new Subject();
    this._message$ = new Subject();
  }

  open({ timer = 2_000, message = '' } = {}) {
    this.open$.next(true);
    this._message$.next({ text: message });
    setTimeout(() => this.close(), timer);
  }

  close() {
    this.open$.next(false);
  }

  get isOpen$(): Observable<boolean> {
    return this.open$.asObservable();
  }

  // get message$(): Observable<SnackbarMessage> {
  //   return this._message$.asObservable();
  // }

  get message$() {
    return combineLatest([this.open$, this._message$]);
  }
}
