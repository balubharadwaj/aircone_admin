import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PincodeComponent } from './pincode.component';

const routes: Routes = [
  {
    path: '',
    component: PincodeComponent,
    data: {
      title: 'Pincode'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class pincodeRoutingModule {}
