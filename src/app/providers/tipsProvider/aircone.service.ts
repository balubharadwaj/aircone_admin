import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {globalService} from './globalService';
import {Component} from '@angular/core';

@Injectable()
export class AirconeService {
  data;
  options;
  imageData;
  constructor(public http: Http, public globalservices:globalService) {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({headers: headers});
   }

   loadServices() {
    return new Promise(resolve => {
      this.http.get('http://localhost:1337/service/getAllSerive')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    })
  }

  addService(data) {
    return new Promise(resolve => {
      this.http.post('http://localhost:1337/service/createService', data)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }

  addSubService(data) {
    console.log(data)
    return new Promise(resolve => {
      this.http.post('http://localhost:1337/service/'+ data.Serviceid+'/createSubService', data)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }

  fileUpload(file) {
    console.log(file);
    let headers = new Headers();
    let formData: FormData = new FormData();
    formData.append('content', file);

    var data:any = {
      imgbase64:file
    }

    return new Promise(resolve => {
      // this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/file/base64/upload', data)
      this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/file/uploads3', formData, {
        headers: headers
      })
        .map(res => res.json())
        .subscribe(data => {
          // console.log(data)
          this.data = data;
          resolve(this.data);
        })
    });
  }

  deleteService(serviceId) {
    return new Promise(resolve => {
      // this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/file/base64/upload', data)
      this.http.delete('http://localhost:1337/service/'+serviceId+'/deleteService')       
        .map(res => res.json())
        .subscribe(data => {
          // console.log(data)
          this.data = data;
          resolve(this.data);
        })
    });
  }

  getAllRequests() {
    return new Promise(resolve => {
      // this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/file/base64/upload', data)
      this.http.get('http://localhost:1337/get/allRequest')       
        .map(res => res.json())
        .subscribe(data => {
          // console.log(data)
          this.data = data;
          resolve(this.data);
        })
    });
  }

  deleteRequest(requestId) {
    return new Promise(resolve => {
      this.http.delete('http://localhost:1337/delete/'+ requestId +'/request')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  approveRequest(request) {
    if (request.decline == "decline") {
      return new Promise(resolve => {
        this.http.get('http://localhost:1337/get/'+ request.id +'/approveRequest?decline='+request.decline)       
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          })
      });
    } else {
      return new Promise(resolve => {
        this.http.get('http://localhost:1337/get/'+ request.id +'/approveRequest')       
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          })
      });
    }
  }

  loadUsers() {
    return new Promise(resolve => {
      this.http.get('http://localhost:1337/user/list')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }


}
