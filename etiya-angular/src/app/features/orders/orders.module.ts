import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';

import { WelcomeDirective } from './directives/welcome/welcome.directive';
import { MultipleDirective } from './directives/multiple/multiple.directive';
import { OrderListComponent } from './components/order-list/order-list.component';


@NgModule({
  declarations: [
    OrderListComponent,    
    WelcomeDirective,
    MultipleDirective,],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }