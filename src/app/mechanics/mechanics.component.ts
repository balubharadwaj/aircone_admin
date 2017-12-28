import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,NgForm }  from '@angular/forms';
import { AuthService } from '../providers/tipsProvider/authProvider';
import {Modal, BSModalContext} from 'ngx-modialog/plugins/bootstrap';


@Component({
  templateUrl: './mechanics.component.html',
})
export class MechanicsComponent implements OnInit {

  user: any = {firstName: '', lastName: '', email: '', password: '', mobileNumber: ''};
  data;
  constructor(public authService: AuthService, public modal: Modal) { }

  ngOnInit() {
  }

    submitButton(validVal: NgForm){
    console.log(validVal);
    if(validVal.valid){
     this.mechanicProfile(validVal);
    }
  }

  mechanicProfile(validVal: NgForm) {
     this.user.role ='MECHANIC';
     let TempData = this.user;
    //  delete TempData.confirmPassword;
    this.authService.register(TempData).then( data => {
      this.data = data;
      console.log(this.data)
      if(this.data.status === 412) {
        this.errOf('user alredy existed');
      }
      else {     
        console.log(this.user);
        this.user = {};
        validVal.resetForm();
        this.createdAccount();
      }
    });
    
  }

    errOf(message){
    this.modal.alert()
      .size('sm')
      .title('register Error')
      .body('<p>'+ message +'</p>')
      .open();
  }

      createdAccount(){
      this.modal.alert()
      .size('sm')
      .showClose(true)
      .title('Added Mechanic')
      .body(`<p>Account is created successfully</p>`)
      .open(); 
}

}
