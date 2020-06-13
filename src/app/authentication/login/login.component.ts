import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: FormGroup;
  otpStatus: number;
  enableOtpField: boolean;
  token:any;

  constructor(private fb: FormBuilder,
              private login: LoginService,
              private route: Router) { 
                if(sessionStorage.getItem('token'))
                  route.navigate(['/dashboard']);
              }

  ngOnInit() {
    this.enableOtpField = false;
    this.userData = this.fb.group({
      'username' : new FormControl(null,Validators.required),
      'phone' : new FormControl(null,Validators.required)
    });
  }

  onSubmit() {
    const username = this.userData.value.username;
    const userphone = this.userData.value.phone;
    this.login.getOtp(username, userphone).subscribe(
      (data:any) => {
        this.otpStatus = data.status;
        console.log("form control:"+this.otpStatus);
      }
    )    
    setTimeout(() => {
      this.addFormControl();
    }, 400);
  }

  addFormControl() {
    if (this.otpStatus === 200){
    this.userData.setControl('otp',new FormControl('020619', [Validators.required]));
    this.enableOtpField = true;
    console.log(this.userData);
    }
  } 

  verifyOtp = () => {
    const phone = this.userData.value.phone;
    const otp = this.userData.value.otp;
    this.login.submitForm(phone,otp).subscribe(
      (data:any) => {
        this.token = data;
      }
    )
    setTimeout(() => {
      this.storeToken();
    }, 400);
  }

  storeToken =() => {
    if(this.userData.valid && this.token.access_token){
      sessionStorage.setItem('token',this.token.access_token);
      this.route.navigate(['/dashboard']);
    }
      
  }

}
