import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface APIRequest {
  method: any;
  parameters: any;
  reqBody: any;
}

@Injectable({ providedIn: 'root' })
export class ParameterCheckAPIService {
  getURL = '/api/sifs-api-pg/param-check';
  submitURL = '/api/test';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getAPIs(): Observable<any> {
    return this.http.get(this.getURL);
  }

  makeRequest(body: APIRequest): Observable<any> {
    return this.http.post(this.submitURL, body, this.httpOptions);
  }

  getPing(): Observable<any> {
    return this.http.get('/api/ping');
  }
}
