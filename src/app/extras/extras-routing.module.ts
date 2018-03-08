import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtrasComponent } from './extras.component';


const routes: Routes = [
  {
    path: '',
    component: ExtrasComponent,
    data: {
      title: 'Extras'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtrasRoutingModule {}
