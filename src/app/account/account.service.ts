import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  readonly url = `${environment.API}/accounts`

  constructor(private http: HttpClient) { }

  create(account) {
    return this.http.post(this.url, account);
  }

  index() {
    return this.http.get(this.url);
  }

  show(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(account, id) {
    return this.http.put(`${this.url}/${id}`, account);
  }
}
