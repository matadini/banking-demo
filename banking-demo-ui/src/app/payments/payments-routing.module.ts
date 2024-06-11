import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsWrapperComponent } from './payments-wrapper/payments-wrapper.component';
import { PaymentsNewComponent } from './payments-new/payments-new.component';
import { PaymentsOwnComponent } from './payments-own/payments-own.component';
import { PaymentsUnsupportedComponent } from './payments-unsupported/payments-unsupported.component';

const routes: Routes = [
  {
    path: '', component: PaymentsWrapperComponent,
    children: [
      { path: 'new', component: PaymentsNewComponent },
      { path: 'own', component: PaymentsOwnComponent },
      { path: '**', component: PaymentsUnsupportedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule {}
