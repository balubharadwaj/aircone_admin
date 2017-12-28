import {NgModule} from '@angular/core';

import {ListRequestsComponent} from './list-requests.component';
import {ListRequestsRoutingModule} from './list-requests-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';
//import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
//import { ModalModule } from 'ngx-modialog';
//import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import {ModalModule} from "ngx-modal";

@NgModule({
  imports: [
    ListRequestsRoutingModule,
    CommonModule,
    FormsModule,
   // Ng2Bs3ModalModule,
    NgxPaginationModule,
    ModalModule
    // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [ListRequestsComponent]
})
export class ListRequestsModule {
}
