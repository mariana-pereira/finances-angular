import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  readonly url = `${environment.API}/budgets`

  constructor(private http: HttpClient) { }

  create(budget) {
    return this.http.post(this.url, budget);
  }

  index(month, year) {
    const headers = new HttpHeaders()
            .set("year", year)
            .set("month", month);

    return this.http.get(this.url, {headers});
  }

  show(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  dashboard(year) {
    const headers = new HttpHeaders()
            .set("year", year);

    return this.http.get(`${this.url}/dashboard`, {headers});
  }

  update(budget, id) {
    return this.http.put(`${this.url}/${id}`, budget);
  }
}
