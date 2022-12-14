import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';

const routes: Routes = [
  {path: 'dashboard/customer/add',component:CustomerFormComponent },
  {path: 'dashboard/customers',component:CustomerDashboardComponent },
  {path: 'dashboard/customer/:id',component:CustomerFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
