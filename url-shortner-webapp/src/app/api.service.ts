import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { URL } from './models/URL';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiBaseUrl + "/new/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //'Authorization': 'Bearer ' + this._authService.GetAccessToken()
    })
  };
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  public addURL(url: URL): Observable<URL> {
    return this.http.post<URL>(`${this.baseUrl}`, JSON.stringify(url), this.httpOptions).pipe(map((json: URL) => {
      return json;
    })
    );
  }
}
