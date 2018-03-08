import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './customerservice.component.html',
})
export class CustomerserviceComponent implements OnInit {

  users: any = []
  curPage = '1';
  itemsPPage = 10;
  constructor(public airconeService: AirconeService,public router: Router) {
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

  pagination(i,p){    
    return ((Number(this.curPage)- 1)*this.itemsPPage)+i+1;
  }

  changePage(event){
    this.router.navigate(['/UserFeedback/'+event]);
    this.curPage = event;
  }

}
