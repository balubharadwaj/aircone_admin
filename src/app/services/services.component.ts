import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit {

  public services;

  constructor(public airconeService: AirconeService, public router: Router,private route: ActivatedRoute) {
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

  inActiveService(service) {
    this.airconeService.inActiveService(service.id)
    .then( data => {
      this.loadServices()
    }, err => {
      console.log(err)
    })
  }

  ActiveService(service) {
    this.airconeService.ActiveService(service.id)
    .then( data => {
      this.loadServices()
    }, err => {
      console.log(err)
    })
  }

}
