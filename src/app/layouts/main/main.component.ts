import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	public leftSideBarOpen: boolean = true;
	public rightSideBarOpen: boolean = false;
	public secondRightSideBarOpen: boolean = false;


	constructor() { }

	ngOnInit(): void { }

	leftSideBarToggler() {
		this.leftSideBarOpen = !this.leftSideBarOpen;
	}

	rightSideBarToggler() {
		this.rightSideBarOpen = !this.rightSideBarOpen;
		if (this.secondRightSideBarOpen = true) {
			this.secondRightSideBarOpen = false;	
		}
	}

	secondRightSideBarToggler() {		
			this.secondRightSideBarOpen = !this.secondRightSideBarOpen;
			if (this.rightSideBarOpen = true) {
				this.rightSideBarOpen = false;
				}
	}

}


