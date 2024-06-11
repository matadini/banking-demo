import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BankAccount } from '../model/bank-account';
import { BankAccountHistory } from '../model/bank-account-history';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<BankAccount[]> {
    console.log("go fo accounts")
    return this.http.get<BankAccount[]>(
      'http://localhost:8080/api/v1/bank/accounts/owner/2'
    );
  }

  getAccountHistory(): Observable<BankAccountHistory[]> {
    return this.http.get<BankAccountHistory[]>(
      'http://localhost:8080/api/v1/bank/accounts/owner/2/history'
    );
  }
}
