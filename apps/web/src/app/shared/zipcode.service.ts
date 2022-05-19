import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

type Metadata = {
  ok: boolean;
  message?: boolean;
  status: number;
  statusText: string;
};

type Data = {
  code: string;
  state: string;
  city: string;
  district: string;
  address: string;
};

@Injectable()
export class ZipcodeService {
  constructor(private http: HttpClient) {}

  private static getBaseUrl(): string {
    return 'https://ws.apicep.com/cep.json';
  }

  search(zipcode: string): Observable<Data> {
    return this.http
      .get<Data & Metadata>(ZipcodeService.getBaseUrl(), {
        params: { code: zipcode },
      })
      .pipe(
        tap(console.log),
        map(({ ok, message, statusText, status, ...address }) =>
          ok
            ? address
            : { code: '', state: '', city: '', district: '', address: '' }
        )
      );
  }
}
