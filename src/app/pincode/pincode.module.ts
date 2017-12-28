import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { PincodeComponent } from './pincode.component';
import { pincodeRoutingModule } from './pincode-routing.module';
import { CommonModule } from '@angular/common';
import { loaderModule } from '../loader/loader.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    pincodeRoutingModule,
      CommonModule,
      NgxPaginationModule,
      loaderModule,
      FormsModule
    ],
  declarations: [ PincodeComponent ]
})
export class pincodeListModule { }