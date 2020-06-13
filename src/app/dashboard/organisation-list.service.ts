import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganisationListService {

  constructor(private http: HttpClient) { }

  getListData() {
    return this.http.get("https://dev.snbchain.com/snbchain-core/api/public/foreman-companies/get-mini-details")
    .pipe(
      map(
        data => {
          console.log(data);
          return data;
        }
      )
    )
  }

}
