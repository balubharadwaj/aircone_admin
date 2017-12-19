import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { CustomerserviceComponent } from './customerservice.component';
import { customerserviceRoutingModule } from './customerservice-routing.module';
import { CommonModule } from '@angular/common';
import { loaderModule } from '../loader/loader.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    customerserviceRoutingModule,
      CommonModule,
      NgxPaginationModule,
      loaderModule,
      FormsModule
    ],
  declarations: [ CustomerserviceComponent ]
})
export class customerserviceModule { }