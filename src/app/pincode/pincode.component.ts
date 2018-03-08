import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './pincode.component.html',
})
export class PincodeComponent implements OnInit {

  pincode: any = {pincode: '', location: ''}
  pincodes;
  searchService;
  searchText;
  curPage = '1';
  itemsPPage = 10;
  constructor(public airconeService: AirconeService,public router: Router) { 
    this.getAllPincodes()
    }

  ngOnInit() {
  }

  pincodeadd(pincode) {
    this.pincode = pincode
    this.airconeService.addPincode(this.pincode)
    .then( data => {
      this.pincode = {}
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

  pagination(i,p){    
    return ((Number(this.curPage)- 1)*this.itemsPPage)+i+1;
  }

  changePage(event){
    this.router.navigate(['/Pincode/'+event]);
    this.curPage = event;
  }
}
