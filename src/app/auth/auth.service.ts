import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post(`${this.url}/auth/register`, user);
  }

  login(credentials) {
    return this.http.post(`${this.url}/auth/authenticate`, credentials);
  }

  forgotPassword(email) {
    return this.http.post(`${this.url}/auth/forgot_password`, email);
  }

  resetPassword(credentials) {
    return this.http.post(`${this.url}/auth/reset_password`, credentials);
  }
}
