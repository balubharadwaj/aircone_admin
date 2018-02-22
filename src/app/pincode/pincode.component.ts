import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';

@Component({
  templateUrl: './pincode.component.html',
})
export class PincodeComponent implements OnInit {

  pincode: any = {pincode: '', location: ''}
  pincodes;
  searchService;
  searchText;

  constructor(public airconeService: AirconeService) { 
    this.getAllPincodes()
    }

  ngOnInit() {
  }

  pincodeadd(pincode) {
    this.pincode = pincode
    this.airconeService.addPincode(this.pincode)
    .then( data => {
      this.getAllPincodes()
    })
  }

  removePincode(pincode) {
    this.airconeService.removePincode(pincode)
    .then( data => {
      this.getAllPincodes()
    })
  }

  getAllPincodes() {
    this.airconeService.getAllPincodes()
    .then( data => {
      this.pincodes = data;
    })
  }

  searchPins(searchText) {
    this.airconeService.getOnePincode(searchText)
    .then( data => {
      this.pincodes = data;
    })
  }

  clearSearch() {
    this.getAllPincodes();
    this.searchText = ''
  }
}
