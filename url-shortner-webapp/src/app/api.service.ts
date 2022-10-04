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

  private baseUrl = environment.apiBaseUrl + "/url";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //'Authorization': 'Bearer ' + this._authService.GetAccessToken()
    })
  };
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  public addURL(url: URL): Observable<URL> {
    console.log(url);
    return this.http.post<any>(`${this.baseUrl}`, url).pipe(map((json: string) => {
      return new URL(json);
    })
    );
  }
}
