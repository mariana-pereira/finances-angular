import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfitService {
  readonly url = `${environment.API}/profits`

  constructor(private http: HttpClient) { }

  create(profit, id) {
    const headers = new HttpHeaders()
      .set("id", id)

    return this.http.post(this.url, profit, { headers });
  }

  index(id) {
    const headers = new HttpHeaders()
      .set("id", id)

    return this.http.get(this.url, { headers });
  }
}
