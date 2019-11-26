import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  readonly url = `${environment.API}/cards`

  constructor(private http: HttpClient) { }

  create(card) {
    return this.http.post(this.url, card);
  }

  index() {
    return this.http.get(this.url);
  }

  show(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(card, id) {
    return this.http.put(`${this.url}/${id}`, card);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
