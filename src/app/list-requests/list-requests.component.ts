import { Component, OnInit, ViewChild } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
//import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
//import { Overlay } from 'ngx-modialog';
import {ModalModule} from "ngx-modal";
@Component({
  templateUrl: './list-requests.component.html',
  //providers: [Modal]  
})
export class ListRequestsComponent implements OnInit {
  message:String;
  status = ["ORDER_ACCEPTED", "ORDER_DECLINED"];
  public requests;
 // @ViewChild('modal')
 // modalBig: ModalComponent;
  curPage = '1';
  itemsPPage = 10;
  users;
  mechanicUserId;
  Onerequest;
  userAddress;
  Reason;
  services;
  searchServiceId;
  constructor(public airconeService: AirconeService,public router: Router, private route: ActivatedRoute) { 
    this.getAllRequests();
    this.getAllUsers();
    this.status;
    this.curPage = route.params['page'];
    this.loadServices()
  }

  ngOnInit() {
  }

  loadServices () {
    this.airconeService.loadServices()
    .then(data => {     
      this.services = data;
    });
  }

  getAllRequests() {
    this.airconeService.getAllRequests()
    .then( data => {
      this.requests = data;
    })
  }

  getAllUsers() {
    this.airconeService.loadUsers()
    .then( data => {
      this.users = data;
    })
  }

  getOneRequest(request) {
    this.airconeService.getOneRequest(request.id)
    .then(data => {
      this.Onerequest = data;
      this.userAddress = this.Onerequest.request;
    })
  }


  deleteRequest(request) {
    this.airconeService.deleteRequest(request.id)
    .then( data => {
      this.getAllRequests()      
    })
  }

  assignRequest(request) {
    if (this.mechanicUserId) {
      console.log(this.mechanicUserId)
      console.log(request)
      this.airconeService.assignRequest(request.id, this.mechanicUserId)
      .then( data => {
        this.getAllRequests();  
      })
    } else {
      alert("select mechanic")
    }
  }

  requestDecline(request) {
    this.airconeService.declineRequest(request.id, this.Reason)
    .then( data => {
      this.getAllRequests()
   })
  }


  pagination(i,p){    
    return ((Number(this.curPage)- 1)*this.itemsPPage)+i+1;
  }

  changePage(event){
    this.router.navigate(['/ListRequests/'+event]);
    this.curPage = event;
  }

  latestRequests() {
     var searchString = 'ORDER_REQUESTED';
     this.searchServiceId;
     this.airconeService.statusWiseRequests(this.searchServiceId, searchString)
     .then( data => {
      this.requests = data;      
     })
  }

  pendingRequests() {
    var searchString = 'ORDER_APPROVED';
    this.searchServiceId;
    this.airconeService.statusWiseRequests(this.searchServiceId, searchString)
    .then( data => {
     this.requests = data;      
    })
  }

  closedRequests() {
    var searchString = 'ORDER_CLOSED';
    this.searchServiceId;
    this.airconeService.statusWiseRequests(this.searchServiceId, searchString)
    .then( data => {
     this.requests = data;      
    })
  }

}
