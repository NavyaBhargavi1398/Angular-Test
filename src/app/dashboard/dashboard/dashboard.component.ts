import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  countOfStats: number;
  countOfBranches: number;

  constructor(private dashboardData: DashboardService) { }

  ngOnInit() {
    this.dashboardData.getStatsData().subscribe(
      (data:any) => this.countOfStats = data.value.data
    );
    this.dashboardData.getBranchesData().subscribe(
      (data:any) => this.countOfBranches = data.value.data
    )
  }

}
