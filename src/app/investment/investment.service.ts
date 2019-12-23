import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  readonly url = `${environment.API}/investments`

  constructor(private http: HttpClient) { }

  create(investment, id) {
    const headers = new HttpHeaders()
            .set("account_id", id);
    return this.http.post(this.url, investment, {headers});
  }

  index() {
    return this.http.get(this.url);
  }

  show(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(investment, id, account, target) {
    const headers = new HttpHeaders()
            .set("account_id", account)
            .set("target_id", target);
            
    return this.http.put(`${this.url}/${id}`, investment, {headers});
  }

  delete(id, account, target) {
    const headers = new HttpHeaders()
            .set("account_id", account)
            .set("target_id", target);
    return this.http.delete(`${this.url}/${id}`, {headers});
  }

  redeem(id, account, target) {
    const headers = new HttpHeaders()
            .set("account_id", account)
            .set("target_id", target);
    return this.http.delete(`${this.url}/redeem/${id}`, {headers});
  }
}
