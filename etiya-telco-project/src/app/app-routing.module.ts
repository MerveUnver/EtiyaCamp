import { ShowcaseComponent } from './shared/pages/showcase/showcase.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'showcase',pathMatch:'full'},
  {path:'showcase',component:ShowcaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
