import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AddSubservicesComponent } from './add-subservices.component';
import { subServicesRoutingModule } from './add-subservices-routing.module';
import { CommonModule } from '@angular/common';
import { loaderModule } from '../loader/loader.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    subServicesRoutingModule,
      CommonModule,
      NgxPaginationModule,
      loaderModule,
      FormsModule
    ],
  declarations: [ AddSubservicesComponent ]
})
export class subServiceListModule { }