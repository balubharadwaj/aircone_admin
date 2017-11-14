import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { UserslistComponent } from './userslist.component';
import { usersListRoutingModule } from './userslist-routing.module';
import { CommonModule } from '@angular/common';
import { loaderModule } from '../loader/loader.module';




@NgModule({
  imports: [
      usersListRoutingModule,
      CommonModule,
      NgxPaginationModule,
      loaderModule
    ],
  declarations: [ UserslistComponent]
})
export class vendorsListModule { }