import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';


@Component({
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit {

  public services;

  constructor(public airconeService: AirconeService) {
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

  removeService(service) {
    this.airconeService.deleteService(service.id)
    .then( data => {
      this.loadServices()
    }, err => {
      console.log(err)
    })
  }

}
