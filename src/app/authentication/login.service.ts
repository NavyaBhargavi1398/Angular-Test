import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getOtp(name,phone){
    return this.http.get("https://dev.snbchain.com/snbchain-uaa/api/account/tmp_login_otp_generate", {observe: 'response', params:{name:name, login:phone}})
    .pipe(
      map(
        data => {
          return data;
        }
      )
    )
  }

  submitForm(name,otp) {
    let body = new HttpParams();
    body = body.append('username', name);
    body = body.append('otp', otp);
    body = body.append('client_secret', "OVfJYgQYHSubgMBMn2bXIMZe4");
    body = body.append('grant_type', 'otp');
    body = body.append('scope',"read+write");
    body = body.append('client_id','user_portal_app_client');
    return this.http.post("https://dev.snbchain.com/snbchain-uaa/api/oauth/token",body)
    .pipe(
      map(
        data => {
          console.log("post data:"+data);
          return data;
        }
      )
    )
  }

}
