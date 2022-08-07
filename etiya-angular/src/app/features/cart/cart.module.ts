import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartSummaryService } from './services/cart-summary.service';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';




@NgModule({
  declarations: [
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports:[CartSummaryComponent],
  providers:[CartSummaryService]
})
export class CartModule { }
