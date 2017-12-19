import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';

@Component({
  templateUrl: './spareparts.component.html',
})
export class SparepartsComponent implements OnInit {

    services;
    spareparts: any = {};
    spares;
    

  constructor(public airconeService: AirconeService) {
    this.loadServices()
    this.listspares();
   }

  ngOnInit() {
  }

  loadServices () {
    this.airconeService.loadServices()
    .then(data => {     
      this.services = data;
    });
  }

  sparepartsadd(spare) {
    this.airconeService.addSpare(spare)
    .then(data => {     
      this.spareparts = {};
      this.listspares();
    });
  }

  listspares() {
    this.airconeService.loadspares()
    .then(data => {     
      this.spares = data;
    });
  }

  sparepartsremove(spare) {
    this.airconeService.removespare(spare.id)
    .then(data => {     
      this.listspares();
    });
  }


}
