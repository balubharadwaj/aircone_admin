import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerserviceComponent } from './customerservice.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerserviceComponent,
    data: {
      title: 'Customer Service'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class customerserviceRoutingModule {}
