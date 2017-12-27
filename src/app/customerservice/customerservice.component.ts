import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';

@Component({
  templateUrl: './customerservice.component.html',
})
export class CustomerserviceComponent implements OnInit {

  users;

  constructor(public airconeService: AirconeService) {
    this.loadUsers()
   }

  ngOnInit() {
  }

  loadUsers() {
    this.airconeService.userWiseFeedback()
    .then( data => {
      this.users = data;
    })
  }

  deleteRequest(user) {
    this.airconeService.deleteUserWiseFeedback(user.id)
    .then( data => {
      this.loadUsers();
    })
  }

}
