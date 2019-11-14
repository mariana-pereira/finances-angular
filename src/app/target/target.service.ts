import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TargetService {

  readonly url = `${environment.API}/targets`

  constructor(private http: HttpClient) { }

  create(target) {
    return this.http.post(this.url, target);
  }

  index() {
    return this.http.get(this.url);
  }

  show(id) {
    return this.http.get(`${this.url}/${id}`);
  }
}
