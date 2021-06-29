import { Injectable } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
