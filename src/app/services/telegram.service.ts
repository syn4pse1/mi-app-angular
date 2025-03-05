import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private apiUrl = 'https://tu-backend-en-glitch.glitch.me/get-redirect';

  constructor(private http: HttpClient) {}

  getRedirectUrl(): Observable<{ url: string }> {
    return this.http.get<{ url: string }>(this.apiUrl);
  }
}
