import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  readonly url = `${environment.API}/expenses`

  constructor(private http: HttpClient) { }

  create(expense, invoice, card) {
    const headers = new HttpHeaders()
      .set("invoice_id", invoice)
      .set("card_id", card)
    return this.http.post(this.url, expense, { headers });
  }

  month(month, year) {
    const headers = new HttpHeaders()
      .set("year", year)
      .set("month", month);

    return this.http.get(`${this.url}/dashboard`, { headers });
  }

  year(year) {
    const headers = new HttpHeaders()
      .set("year", year)

    return this.http.get(`${this.url}/year`, { headers });
  }

  invoice(id) {
    const headers = new HttpHeaders()
      .set("invoice_id", id)

    return this.http.get(`${this.url}/invoice`, { headers });
  }

  show(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(expense, id) {
    return this.http.put(`${this.url}/${id}`, expense);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  categoryMonth(month, year) {
    const headers = new HttpHeaders()
      .set("month", month)
      .set("year", year)

    return this.http.get(`${this.url}/category/month`, { headers });
  }

  categoryYear(year) {
    const headers = new HttpHeaders()
      .set("year", year)

    return this.http.get(`${this.url}/category/year`, { headers });
  }

}
