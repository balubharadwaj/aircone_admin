import { Component, OnInit, ViewChild } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';

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
  
  constructor(public airconeService: AirconeService,public modal: Modal) { 
    this.getAllRequests()
    this.status;
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

  editRequest(reuests) {

  }

}
