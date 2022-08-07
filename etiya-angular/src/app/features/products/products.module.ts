import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SaleDirective } from './directives/sale.directive';
import { KdvPipe } from './pipes/kdv-pipe/kdv.pipe';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { FilterProductPipe } from './pipes/filterProduct/filter-product.pipe';
import { ClickProductCardDirective } from './directives/click-product-card.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductCardComponent,
    ProductListComponent,
    SaleDirective,KdvPipe,
    AddProductComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    FilterProductPipe,
    ClickProductCardDirective
  ],
    
  imports: [CommonModule,
    ProductsRoutingModule,
  ReactiveFormsModule,
  FormsModule
],
  exports:[ProductListComponent]
})
export class ProductsModule { }
