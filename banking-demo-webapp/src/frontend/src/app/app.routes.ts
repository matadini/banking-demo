import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path:'payments',
    loadChildren:()=> import('./payments/payments.module').then(m=> m.PaymentsModule)
  }
];
