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
  submitURL = '/api/sifs-api-pg/make-request';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  /**
   * Gets apis from the discovery API
   * @returns apis
   */
  getAPIs(): Observable<any> {
    return this.http.get(this.getURL);
  }

  /**
   * Makes a to the bridge server
   * @param body This is the body for the HTTP request
   * @returns request
   */
  makeRequest(body: APIRequest): Observable<any> {
    return this.http.post(this.submitURL, body, this.httpOptions);
  }

  /**
   * Fetches the ping server and its timestamp
   * @returns ping
   */
  getPing(): Observable<any> {
    return this.http.get('/api/ping');
  }
}
