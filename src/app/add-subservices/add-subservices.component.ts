import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';


@Component({
  templateUrl: './add-subservices.component.html',
})
export class AddSubservicesComponent implements OnInit {

  private subservice = {image:''};
  public services;

  constructor(public airconeService: AirconeService, public modal: Modal) {
    this.loadServices()
   }

  ngOnInit() {
  }

  loadServices () {
    this.airconeService.loadServices()
    .then(data => {     
      this.services = data;
    });
  }

  myfile: any;
  fileChange(fileinput: any) {
    this.myfile = fileinput.target.files[0];
    this.airconeService.fileUpload(this.myfile)
    .then(data => {
      this.subservice.image = '';
      this.subservice.image = (data['files'][0].url);
    },
  err => {
    console.log(err);
    });
  }

  saveSubService() {
    console.log(this.subservice)
    if(this.subservice.image != '') {
      this.airconeService.addSubService(this.subservice)
      .then( data => {
        this.subservice.image = '';
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
