import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpdateURL } from './models/UpdateURL';
import { URL } from './models/URL';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  public addURL(url: URL): Observable<URL> {
    return this.http.post<URL>(`${this.baseUrl}/new/`, JSON.stringify(url), this.httpOptions).pipe(map((json: URL) => {
      return json;
    })
    );
  }

  public updateURL(url: UpdateURL): Observable<any> {
    const updateOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      }),
      responseType: "text" as "json"
    };
    return this.http.put<any>(`${this.baseUrl}/update/`, url, updateOptions).pipe(map((json: any) => {
      return json;
    })
    );
  }

  public deleteURL(url: URL): Observable<any> {
    const deleteHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: url
    };

    return this.http.delete<any>(`${this.baseUrl}/delete/`,deleteHttpOptions).pipe(map((json: any) => {
      return json;
    })
    );
  }
}
