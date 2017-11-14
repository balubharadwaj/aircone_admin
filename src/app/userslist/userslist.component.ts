import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';

@Component({
  templateUrl: './userslist.component.html',
})
export class UserslistComponent implements OnInit {

  public users;

  constructor(public airconeService: AirconeService) {
    this.loadUsers()
   }

  ngOnInit() {
  }

  loadUsers() {
    this.airconeService.loadUsers()
    .then( data => {
      this.users = data;
    })
  }

  deleteUser() {

  }

}
