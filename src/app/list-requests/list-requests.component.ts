import { Component, OnInit, ViewChild } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './list-requests.component.html',
  providers: [Modal]  
})
export class ListRequestsComponent implements OnInit {
  message:String;
  status = ["ORDER_ACCEPTED", "ORDER_DECLINED"];
  public requests;
  @ViewChild('modal')
  modalBig: ModalComponent;
  curPage = '1';
  itemsPPage = 10;
  
  constructor(public airconeService: AirconeService,public modal: Modal, public router: Router, private route: ActivatedRoute) { 
    this.getAllRequests()
    this.status;
    this.curPage = route.params['page'];
    
  }

  ngOnInit() {
  }

  getAllRequests() {
    this.airconeService.getAllRequests()
    .then( data => {
      this.requests = data;
    })
  }

  deleteRequest(request) {
    this.airconeService.deleteRequest(request.id)
    .then( data => {
   //   this.requests.splice(this.requests.indexOf(request, 1))
      this.getAllRequests()      
    })
  }

  requestApprove(request) {
    this.airconeService.approveRequest(request)
    .then( data => {
      this.getAllRequests()
    })
  }

  requestDecline(request) {
    this.airconeService.approveRequest(request)
    .then( data => {
      this.getAllRequests()
    })
  }

  statusChanged(request) {
    console.log(request.status)
    this.airconeService.requestUpdate(request)
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

}
