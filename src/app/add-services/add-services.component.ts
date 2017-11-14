import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';


@Component({
  templateUrl: './add-services.component.html',
})
export class AddServicesComponent implements OnInit {

  private service = {image:''};
  
  constructor(public airconeService: AirconeService, public modal: Modal) { }

  ngOnInit() {
  }


  myfile: any;
  fileChange(fileinput: any) {
    this.myfile = fileinput.target.files[0];
    this.airconeService.fileUpload(this.myfile)
    .then(data => {
      this.service.image = '';
      this.service.image = (data['files'][0].url);
    },
  err => {
    console.log(err);
    });
  }

  saveService() {
    console.log(this.service)
    if(this.service.image != '') {
      this.airconeService.addService(this.service)
      .then( data => {
        this.service.image = '';
      }, err => {
        console.log(err)
      }) 
    } else {
      this.alert('please Upload an image') 
    }
  }

  alert(msg) {
    this.modal.alert()
    .size('sm')
    .showClose(true)
    .title('Added Service')
    .body('<p>'+ msg +'</p>')
    .open();
  }

}
