import { Component, OnInit } from '@angular/core';
import { OrganisationListService } from '../../organisation-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dataList:any

  constructor(private list:OrganisationListService) { }

  ngOnInit() {
    this.list.getListData().subscribe(
      data => {
        this.dataList = data;
        console.table(this.dataList);}
    );
    
  }

}
