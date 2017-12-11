import {NgModule} from '@angular/core';

import {ListRequestsComponent} from './list-requests.component';
import {ListRequestsRoutingModule} from './list-requests-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { NgxPaginationModule} from 'ngx-pagination'; // <-- import the module



@NgModule({
  imports: [
    ListRequestsRoutingModule,
    CommonModule,
    FormsModule,
    Ng2Bs3ModalModule,
    NgxPaginationModule
    // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [ListRequestsComponent]
})
export class ListRequestsModule {
}
