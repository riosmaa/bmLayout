import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  selectedDate: "2020-03-03";

  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }
  

}
