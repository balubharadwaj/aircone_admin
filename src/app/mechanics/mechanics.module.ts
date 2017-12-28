import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { MechanicsComponent } from './mechanics.component';
import { mechanicsRoutingModule } from './mechanics-routing.module';
import { CommonModule } from '@angular/common';
import { loaderModule } from '../loader/loader.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    mechanicsRoutingModule,
      CommonModule,
      NgxPaginationModule,
      loaderModule,
      FormsModule
    ],
  declarations: [ MechanicsComponent ]
})
export class mechanicsAddModule { }