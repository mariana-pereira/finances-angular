import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  readonly url = `${environment.API}/items`

  constructor(private http: HttpClient) { }

  create(item, id) {
    const headers = new HttpHeaders()
      .set("expense_id", id)

    return this.http.post(this.url, item, { headers });
  }

  index(id) {
    const headers = new HttpHeaders()
      .set("expense_id", id)

    return this.http.get(this.url, { headers });
  }
}
