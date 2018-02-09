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
  //  baseURL = "https://air-cone-backend.appspot.com"; //production
    baseURL = "http://localhost:80"; //development
  constructor(public http: Http, public globalservices:globalService) {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({headers: headers});
   }

   loadServices() {
    return new Promise(resolve => {
      this.http.get(this.baseURL+'/service/getAllServicesForAdmin')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    })
  }

  addService(data) {
    return new Promise(resolve => {
      this.http.post(this.baseURL+'/service/createService', data)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }

   updateService(data) {
    return new Promise(resolve => {
      this.http.put(this.baseURL+'/service/'+data.id+'/updateService', data)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }

  addSubService(data) {
    return new Promise(resolve => {
      this.http.post(this.baseURL+'/service/'+ data.Serviceid+'/createSubService', data)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }

  fileUpload(file) {
    //console.log(file);
    let headers = new Headers();
    let formData: FormData = new FormData();
    formData.append('content', file);

    var data:any = {
      imgbase64:file
    }
    
    //console.log(formData)
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

  inActiveService(serviceId) {
    return new Promise(resolve => {
      // this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/file/base64/upload', data)
      this.http.get(this.baseURL+'/service/'+serviceId+'/inActiveService')       
        .map(res => res.json())
        .subscribe(data => {
          // console.log(data)
          this.data = data;
          resolve(this.data);
        })
    });
  }

  ActiveService(serviceId) {
    return new Promise(resolve => {
      // this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/file/base64/upload', data)
      this.http.get(this.baseURL+'/service/'+serviceId+'/makeActiveService')       
        .map(res => res.json())
        .subscribe(data => {
          // console.log(data)
          this.data = data;
          resolve(this.data);
        })
    });
  }

  getAllRequests(searchServiceId) {
    return new Promise(resolve => {
      // this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/file/base64/upload', data)
      this.http.get(this.baseURL+'/get/allRequest?serviceStatus='+searchServiceId)       
        .map(res => res.json())
        .subscribe(data => {
          // console.log(data)
          this.data = data;
          resolve(this.data);
        })
    });
  }

  getOneService(serviceId) {
    return new Promise(resolve => {
      // this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/file/base64/upload', data)
      this.http.get(this.baseURL+'/service/'+serviceId+'/getOneSerive')       
        .map(res => res.json())
        .subscribe(data => {
          // console.log(data)
          this.data = data;
          resolve(this.data);
        })
    });
  }

  addServicePrice(serviceId, data) {
    return new Promise(resolve => {
      this.http.post(this.baseURL+'/service/'+serviceId+'/add/subservicePrice', data)       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  removeTypePrice(serviceId, type) {
    return new Promise(resolve => {
      this.http.get(this.baseURL+'/service/'+serviceId+'/'+type+'/subservicePrice')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  deleteRequest(requestId) {
    return new Promise(resolve => {
      this.http.delete(this.baseURL+'/delete/'+ requestId +'/request')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  inActiveRequest(requestId) {
    return new Promise(resolve => {
      this.http.get(this.baseURL+'/request/'+ requestId +'/inactive')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  assignRequest(requestId, mechId) {
    var data
    return new Promise(resolve => {
      this.http.put(this.baseURL+'/assign/'+ requestId +'/'+mechId+'/request',data)       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  approveRequest(request) {
      return new Promise(resolve => {
        this.http.get(this.baseURL+'/get/'+ request.id +'/approveRequest?decline='+request.decline)       
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          })
      });
  }

  declineRequest(requestId, userId, data) {
    return new Promise(resolve => {
      this.http.put(this.baseURL+'/get/'+requestId+'/'+userId+'/requestDeclined',data)       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
}

  loadUsers() {
    return new Promise(resolve => {
      this.http.get(this.baseURL+'/user/list')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  deleteUser(userId) {
    return new Promise(resolve => {
      this.http.delete(this.baseURL+'/remove/'+userId+'/user')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  activeUser(userId) {
    return new Promise(resolve => {
      this.http.delete(this.baseURL+'/user/'+userId+'/active')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  inActiveUser(userId) {
    return new Promise(resolve => {
      this.http.delete(this.baseURL+'/user/'+userId+'/inactive')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  userWiseFeedback() {
    return new Promise(resolve => {
      this.http.get(this.baseURL+'/get/getUserwiseFeedback')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  addSpare(data) {
    return new Promise(resolve => {
      this.http.post(this.baseURL+'/create/spare', data)       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  updateSpare(data) {
    return new Promise(resolve => {
      this.http.put(this.baseURL+'/get/sparePartsUpdate', data)       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  loadspares() {
    return new Promise(resolve => {
      this.http.get(this.baseURL+'/get/allspareslist')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  removespare(data) {
    return new Promise(resolve => {
      this.http.delete(this.baseURL+'/delete/'+data+'/onespare')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  getOneRequest(requestId) {
    return new Promise(resolve => {
      this.http.get(this.baseURL+'/get/'+requestId+'/oneRequest')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  addPincode(data) {
    return new Promise(resolve => {
      this.http.post(this.baseURL+'/create/pincode', data)       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  removePincode(data) {
    return new Promise(resolve => {
      this.http.delete(this.baseURL+'/remove/'+data+'/pincode')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  getAllPincodes() {
    return new Promise(resolve => {
      this.http.get(this.baseURL+'/get/allPincodes')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  searchSpare(serviceId, searchText) {
    return new Promise(resolve => {
      this.http.get(this.baseURL+'/get/'+serviceId+'/'+searchText+'/searviceSpare')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  statusWiseRequests(serviceId, searchText) {
    return new Promise(resolve => {
      this.http.get(this.baseURL+'/get/'+serviceId+'/'+searchText+'/allSingleStatusRequest')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  inActivatedRequests() {
    return new Promise(resolve => {
      this.http.get(this.baseURL+'/get/allinActiveRequest')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  deleteUserWiseFeedback(id) {
    return new Promise(resolve => {
      this.http.delete(this.baseURL+'/delete/'+id+'/userFeedback')       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }


}
