import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getDadJoke(): Observable<{ joke: string }> {
    const url = `${this.apiBaseUrl}/dad-joke/`;
    console.log('GET Dad Joke endpoint:', url);
    return this.http.get<{ joke: string }>(url);
  }
}
