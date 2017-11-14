import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSubservicesComponent } from './add-subservices.component';

const routes: Routes = [
  {
    path: '',
    component: AddSubservicesComponent,
    data: {
      title: 'add subservice'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class subServicesRoutingModule {}
