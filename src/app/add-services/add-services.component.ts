import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './add-services.component.html',
})
export class AddServicesComponent implements OnInit {

  public service: any = {image:'', slider:[], serviceName:'', description:'', note:''};
  private serviceId: any;
  updatetrue: boolean = false;
  subServices = [];
  subService;
  
  constructor(public airconeService: AirconeService, public modal: Modal, private route: ActivatedRoute) { 
    this.serviceId = route.params['_value']['serviceId'];  
    if(this.serviceId == "null"){
      this.updatetrue = false;      
   } else {
    this.getOneService()
    this.updatetrue = true;
   }
  }

  ngOnInit() {
  }

  subserviceadd(oneSubService) {
    this.service.subService.push(oneSubService)
    this.service.onesubservice = ''
  }

  subserviceremove(oneSubService) {
    this.service.subService.splice(this.service.subService.indexOf(oneSubService),1)
  }

  getOneService() {
    this.airconeService.getOneService(this.serviceId)
    .then(data => {
      this.service = data;
    })
  }

  removeSlideimg(slideimg) {
    this.service.slider.splice(this.service.slider.indexOf(slideimg), 1)
  }

  removeMainImage(image) {
    delete this.service.image
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

  sliderfileChange(fileinput: any) {
    this.myfile = fileinput.target.files[0];
    this.airconeService.fileUpload(this.myfile)
    .then(data => {
      this.service.slider.push(data['files'][0].url);
    },
  err => {
    console.log(err);
    });
  }

  saveService() {
    console.log(this.service)
    if (this.updatetrue) {
      if(this.service.image != '') {
        this.service.subServices = this.subServices
        this.airconeService.updateService(this.service)
        .then( data => {
          this.service.image = '';
          this.service.subService = [];
          this.service.serviceName = '';
          this.service.description = '';
          this.service.note = '';
          this.service.slider = [];
        }, err => {
          console.log(err)
        }) 
      } else {
        this.alert('please Upload an image') 
      }
      
    } 
    else {
      console.log(this.service)
      
      console.log("new service")
      if(this.service.image != '') {
        this.service.subServices = this.subServices        
        this.airconeService.addService(this.service)
        .then( data => {
          this.service.image = '';
          this.service.subService = [];          
          this.service.serviceName = '';
          this.service.description = '';
          this.service.note = '';
          this.service.slider = [];
        }, err => {
          console.log(err)
        }) 
      } else {
        this.alert('please Upload an image') 
       }
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
