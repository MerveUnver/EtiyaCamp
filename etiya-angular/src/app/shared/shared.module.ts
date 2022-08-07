import { CategoriesModule } from './../features/categories/categories.module';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ProductsModule } from '../features/products/products.module';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [NavbarComponent, HomepageComponent],
  imports: [CommonModule, SharedRoutingModule, ProductsModule,CategoriesModule],
  exports: [NavbarComponent]
})
export class SharedModule {}
