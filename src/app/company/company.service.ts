import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  readonly url = `${environment.API}/companies`

  constructor(private http: HttpClient) { }

  create(company) {
    return this.http.post(this.url, company);
  }

  index() {
    return this.http.get(this.url);
  }

  show(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(company, id) {
    return this.http.put(`${this.url}/${id}`, company);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
