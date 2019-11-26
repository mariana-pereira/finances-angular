import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  readonly url = `${environment.API}/invoices`

  constructor(private http: HttpClient) { }

  create(invoice, id) {
    const headers = new HttpHeaders()
      .set("id", id)
    return this.http.post(this.url, invoice, { headers });
  }

  pay(id) {
    return this.http.put(`${this.url}/dashboard/${id}`, {});
  }

  index() {
    return this.http.get(this.url);
  }

  show(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(invoice, id) {
    return this.http.put(`${this.url}/${id}`, invoice);
  }

  paid(id, paid) {
    const headers = new HttpHeaders()
      .set("id", id)
      .set('paid', paid)
    return this.http.get(`${this.url}/card`, { headers });
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
