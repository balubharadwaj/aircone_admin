import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './add-subservices.component.html',
})
export class AddSubservicesComponent implements OnInit {

  public service;
  serviceId;
  serviceRate: any = {name: '', type: '', rate: ''};

  constructor(public airconeService: AirconeService, public modal: Modal, private route: ActivatedRoute) {
    this.serviceId = route.params['_value']['serviceId'];  
    this.loadService()
   }

  ngOnInit() {
  }

  loadService () {
    this.airconeService.getOneService(this.serviceId)
    .then(data => {     
      this.service = data;
    });
  }

  addtypePriceadd(serviceRate) {
    var subServicePrice = {name: serviceRate.name, type: serviceRate.type, Price: serviceRate.rate}
    this.airconeService.addServicePrice(this.serviceId, subServicePrice)
    .then(data => {    
      this.serviceRate = {}
      this.loadService() 
    });
  }

  typePriceremove(type) {
    this.airconeService.removeTypePrice(this.serviceId, type.id)
    .then(data => {    
      this.loadService() 
    });
  }

  // myfile: any;
  // fileChange(fileinput: any) {
  //   this.myfile = fileinput.target.files[0];
  //   this.airconeService.fileUpload(this.myfile)
  //   .then(data => {
  //     this.subservice.image = '';
  //     this.subservice.image = (data['files'][0].url);
  //   },
  // err => {
  //   console.log(err);
  //   });
  // }

  // saveSubService() {
  //   console.log(this.subservice)
  //   if(this.subservice.image != '') {
  //     this.airconeService.addSubService(this.subservice)
  //     .then( data => {
  //       this.subservice.image = '';
  //     }, err => {
  //       console.log(err)
  //     }) 
  //   } else {
  //     this.alert('please Upload an image') 
  //   }
  // }

  // alert(msg) {
  //   this.modal.alert()
  //   .size('sm')
  //   .showClose(true)
  //   .title('Added Service')
  //   .body('<p>'+ msg +'</p>')
  //   .open();
  // }

}
