import { Component } from '@angular/core';
import { ApiService } from '../../service/api-service';
import { Observable } from 'rxjs';
import { BankAccount } from '../../model/bank-account';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payments-new',
  templateUrl: './payments-new.component.html',
  styleUrl: './payments-new.component.scss'
})
export class PaymentsNewComponent {

  accounts: BankAccount[] = [];
  form = new FormGroup({
    account: new FormControl(this.accounts),
    targetName: new FormControl('', Validators.required),
    targetAccountNumber: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    transferName: new FormControl('', Validators.required),
  })


  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAccounts()
    .subscribe({
      next: data => {
        this.accounts = data;
        
      },
      error: error=>{

      }
    })
    
    
    // .subscribe(data=>
      
      
    //   this.accounts=data);
  }

  submitForm() {
    console.log(this.form.value)
  }

}


