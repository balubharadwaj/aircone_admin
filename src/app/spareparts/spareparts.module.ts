import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { SparepartsComponent } from './spareparts.component';
import { sparepartsRoutingModule } from './spareparts-routing.module';
import { CommonModule } from '@angular/common';
import { loaderModule } from '../loader/loader.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
      sparepartsRoutingModule,
      CommonModule,
      NgxPaginationModule,
      loaderModule,
      FormsModule
    ],
  declarations: [ SparepartsComponent ]
})
export class sparepartsModule { }