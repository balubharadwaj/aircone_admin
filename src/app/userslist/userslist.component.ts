import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './userslist.component.html',
})
export class UserslistComponent implements OnInit {

  public users;
  curPage = '1';
  itemsPPage = 10;
  constructor(public airconeService: AirconeService, public router: Router, private route: ActivatedRoute) {
    this.loadUsers();
    this.curPage = route.params['page'];    
   }

  ngOnInit() {
  }

  loadUsers() {
    this.airconeService.loadUsers()
    .then( data => {
      this.users = data;
    })
  }

  deleteUser(user) {
    this.users.splice(this.users.indexOf(user, 1))    
    this.airconeService.deleteUser(user.id)
    .then( data => {
    })
  }

  inActiveUser(user) {
    this.airconeService.inActiveUser(user.id)
    .then( data => {
    })
  }

  activeUser(user) {
    this.airconeService.activeUser(user.id)
    .then( data => {
    })
  }

  pagination(i,p){    
    return ((Number(this.curPage)- 1)*this.itemsPPage)+i+1;
  }

  changePage(event){
    this.router.navigate(['/UsersList/'+event]);
    this.curPage = event;
  }


}
