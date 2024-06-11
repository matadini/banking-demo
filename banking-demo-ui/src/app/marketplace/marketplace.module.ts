import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialOffersComponent } from './special-offers/special-offers.component';



@NgModule({
  declarations: [SpecialOffersComponent],
  imports: [
    CommonModule
  ],
  exports: [SpecialOffersComponent]
})
export class MarketplaceModule { }
