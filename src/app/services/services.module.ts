import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { ServicesComponent } from './services.component';
import { servicesRoutingModule } from './services-routing.module';
import { CommonModule } from '@angular/common';
import { loaderModule } from '../loader/loader.module';



@NgModule({
  imports: [
      servicesRoutingModule,
      CommonModule,
      NgxPaginationModule,
      loaderModule
    ],
  declarations: [ ServicesComponent ]
})
export class servicesModule { }