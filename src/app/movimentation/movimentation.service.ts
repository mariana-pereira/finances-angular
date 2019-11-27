import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovimentationService {
  readonly url = `${environment.API}/movimentations`

  constructor(private http: HttpClient) { }

  createIncome(movimentation, id) {
    const headers = new HttpHeaders()
            .set("account_id", id);

    return this.http.post(`${this.url}/income`, movimentation, {headers});
  }

  createOutcome(movimentation, id) {
    const headers = new HttpHeaders()
            .set("account_id", id);

    return this.http.post(`${this.url}/outcome`, movimentation, {headers});
  }

  transfer(movimentation, origin, target) {
    const headers = new HttpHeaders()
            .set("origin_id", origin)
            .set("target_id", target);

    return this.http.post(`${this.url}/transfer`, movimentation, {headers});
  }

  index() {
    return this.http.get(this.url);
  }

  month(month, year) {
    const headers = new HttpHeaders()
            .set("month", month)
            .set("year", year);

    return this.http.get(`${this.url}/month`, {headers});
  }

  monthIncome(month, year) {
    const headers = new HttpHeaders()
            .set("month", month)
            .set("year", year);

    return this.http.get(`${this.url}/income/month`, {headers});
  }

  monthOutcome(month, year) {
    const headers = new HttpHeaders()
            .set("month", month)
            .set("year", year);

    return this.http.get(`${this.url}/outcome/month`, {headers});
  }

  year(year) {
    const headers = new HttpHeaders()
            .set("year", year);

    return this.http.get(`${this.url}/year`, {headers});
  }

  show(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(movimentation, id, account) {
    const headers = new HttpHeaders()
            .set("account_id", account);

    return this.http.put(`${this.url}/${id}`, movimentation, {headers});
  }

  delete(id, account) {
    const headers = new HttpHeaders()
            .set("account_id", account);

    return this.http.delete(`${this.url}/${id}`, {headers})
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

  company(company, year) {
    const headers = new HttpHeaders()
      .set("company_id", company)
      .set("year", year)

    return this.http.get(`${this.url}/company`, { headers });
  }
}
