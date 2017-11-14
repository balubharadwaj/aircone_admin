import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostRequestComponent } from './post-request.component';

const routes: Routes = [
  {
    path: '',
    component: PostRequestComponent,
    data: {
      title: 'Post Request'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class postRequestRoutingModule {}
