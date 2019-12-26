import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = `${environment.API}/auth`;

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post<{user: {}, token: string}>(`${this.url}/register`, user)
    .pipe(
      map((res) => {
        localStorage.setItem('token', res.token);
      })
    )
  }

  login(credentials) {
    return this.http.post<{user: {}, token: string}>(`${this.url}/authenticate`, credentials)
      .pipe(
        map((res) => {
          localStorage.setItem('token', res.token);
        })
      )
  }

  forgotPassword(email) {
    return this.http.post(`${this.url}/forgot_password`, email);
  }

  resetPassword(credentials) {
    return this.http.post(`${this.url}/reset_password`, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    if (localStorage.getItem('token') !== null) {
      return true;
    }
    else {
      return false;
    }
  }
}
