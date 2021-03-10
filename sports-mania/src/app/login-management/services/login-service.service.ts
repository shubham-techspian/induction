import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { ROUTE_API_URL, HTTP_OPTIONS } from '../../shared/app-config';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {
  loginPayload =
    {
      userName: null,
    };

  constructor(private http: HttpClient) { }

  getUsername(): string {
    return this.loginPayload.userName;
  }

  setUsername(userName: string) {
    this.loginPayload.userName = userName;
  }
  authenticateUser() {
    const id = 1
    return this.http.get(ROUTE_API_URL.LOGIN_DATA_URL +'/'+id, HTTP_OPTIONS);
  }
}
