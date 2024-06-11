import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsNewComponent } from './payments-new/payments-new.component';
import { PaymentsOwnComponent } from './payments-own/payments-own.component';
import { RouterModule } from '@angular/router';
import { PaymentsWrapperComponent } from './payments-wrapper/payments-wrapper.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';


@NgModule({
  declarations: [PaymentsWrapperComponent, PaymentsNewComponent, PaymentsOwnComponent],
  imports: [
    CommonModule, RouterModule, PaymentsRoutingModule, ReactiveFormsModule, MdbCarouselModule
  ], 
  exports: [PaymentsWrapperComponent, PaymentsNewComponent, PaymentsOwnComponent]
})
export class PaymentsModule { }
