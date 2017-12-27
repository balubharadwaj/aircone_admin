import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AirconeService} from '../providers/tipsProvider/aircone.service';

@Component({
  templateUrl: './post-request.component.html',
})
export class PostRequestComponent implements OnInit {

  requestId;
  request;
  userAddress;
  constructor(private route: ActivatedRoute, private airconeService: AirconeService) { 
    this.requestId = route.params['_value']['requestId'];
    this.getOneRequest()
  }

  ngOnInit() {
  }

  getOneRequest() {
    this.airconeService.getOneRequest(this.requestId)
    .then(data => {
      console.log(data)
      this.request = data;
      this.userAddress = this.request.request;

    })
  }

}
