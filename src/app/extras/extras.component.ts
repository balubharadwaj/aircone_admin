import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
})
export class ExtrasComponent implements OnInit {

  requests;
  constructor(public airconeService: AirconeService) { 
    this.getExtras()
  }

  ngOnInit() {
  }

  getExtras() {
    console.log("hitted")
    this.airconeService.getExtras()
    .then( data => {
      this.requests = data
    })
  }

}
