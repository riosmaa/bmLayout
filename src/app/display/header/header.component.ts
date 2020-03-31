import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toogleSIdeBarForMe: EventEmitter<any> = new EventEmitter();

  @Output() toogleRigthSideBarForMe: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void { }


  toggleSideBar(){
    this.toogleSIdeBarForMe.emit();
  }

  toggleRightSideBar(){
    this.toogleRigthSideBarForMe.emit();
  }
  

}
