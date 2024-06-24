import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BankAccount } from '../model/bank-account';
import { BankAccountHistory } from '../model/bank-account-history';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(environment.baseUrl.concat('/api/v1/bank/accounts/owner/2'));
  }

  getAccountHistory(): Observable<BankAccountHistory[]> {
    return this.http.get<BankAccountHistory[]>(environment.baseUrl.concat('/api/v1/bank/accounts/owner/2/history'));
  }
}
