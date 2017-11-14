import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { PostRequestComponent } from './post-request.component';
import { postRequestRoutingModule } from './post-request-routing.module';
import { CommonModule } from '@angular/common';
import { loaderModule } from '../loader/loader.module';



@NgModule({
  imports: [
    postRequestRoutingModule,
      CommonModule,
      NgxPaginationModule,
      loaderModule
    ],
  declarations: [ PostRequestComponent ]
})
export class postRequestModule { }