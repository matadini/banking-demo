import { Component } from '@angular/core';
import { BankAccount } from '../model/bank-account';
import { BankAccountHistory } from '../model/bank-account-history';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  bankAccounts: BankAccount[] = [];
  transactions: BankAccountHistory[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAccounts().subscribe((data) => (this.bankAccounts = data));
    this.apiService.getAccountHistory().subscribe((data) => (this.transactions = data));
  }

}
