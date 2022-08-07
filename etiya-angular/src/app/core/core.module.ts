import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { AuthModule } from './auth/auth.module';
import { IfNotDirective } from './directives/if-not.directive';
import { StorageModule } from './storage/storage.module';


@NgModule({
  declarations: [    
    IfNotDirective
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    StorageModule
  ],
  exports:[
    IfNotDirective,
  ]
})
export class CoreModule { }