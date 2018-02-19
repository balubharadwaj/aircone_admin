import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './spareparts.component.html',
})
export class SparepartsComponent implements OnInit {

    services;
    spareparts: any = {};
    spares;
    searchText;
    searchService;
    editSpare: boolean = false;

  constructor(public airconeService: AirconeService, public router: Router) {
    this.loadServices()
    this.listspares();
   
   }

  ngOnInit() {
  }


  sparepartsedit(spare) {
    this.spareparts = spare
    this.editSpare = true;
  }

  sparepartsupdate(spareupdate) {
    this.airconeService.updateSpare(spareupdate)
    .then(data => {     
      this.listspares();
      this.spareparts = {};
      this.editSpare = false;
    });
  }

  searchTips(searchText) {
    if(!searchText) {
      searchText = "undefined"
    }
    console.log(this.searchService, searchText)
    if(this.searchService && searchText) {
      this.airconeService.searchSpare(this.searchService, searchText)
      .then(data => {
        this.spares = data;
      })
    }
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
      this.spares.splice(this.spares.indexOf(spare.id), 1)
      this.listspares();
    });
  }

  clearSearch() {
    this.listspares();
    this.searchText = ''
    this.searchService = undefined
  }


}
