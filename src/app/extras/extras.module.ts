import {NgModule} from '@angular/core';

import {ExtrasComponent} from './extras.component';
import {ExtrasRoutingModule} from './extras-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {ImageCropperComponent} from 'ng2-img-cropper';
import { loaderModule } from '../loader/loader.module';

// import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';
import 'jquery';
import 'bootstrap';

@NgModule({
  imports: [
    ExtrasRoutingModule,
    CommonModule,
    FormsModule,
    Ng2Bs3ModalModule,
    loaderModule
    // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [ExtrasComponent, ImageCropperComponent]
})
export class extrasModule {
}
