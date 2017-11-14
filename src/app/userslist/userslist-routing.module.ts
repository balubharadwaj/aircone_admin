import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserslistComponent } from './userslist.component';

const routes: Routes = [
  {
    path: '',
    component: UserslistComponent,
    data: {
      title: 'Users List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class usersListRoutingModule {}
