import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getStatsData(){
    return this.http.get("https://roc.dev.snbchain.com/snbchain-reports/api/public/dashboard/metric/ForemanOrgsStats",{responseType:'json'})
    .pipe(
      map(
        data => {
          return data;
        }
      )
    )
  }

  getBranchesData(){
    return this.http.get("https://roc.dev.snbchain.com/snbchain-reports/api/public/dashboard/metric/ForemanOrgBranchesStats",{responseType:'json'})
    .pipe(
      map(
        data => {
          return data;
        }
      )
    )
  }

}
