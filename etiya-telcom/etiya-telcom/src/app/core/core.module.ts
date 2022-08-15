import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumeratePipe } from './pipes/enumerate.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './auth/pages/login/login.component';
import { StorageModule } from './storage/storage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    EnumeratePipe,
    PaginationPipe,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    StorageModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  exports: [
    EnumeratePipe,
    PaginationPipe,
    LoginComponent,

  ]
})
export class CoreModule { }
