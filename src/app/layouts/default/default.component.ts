import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-default',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

	public leftSideBarOpen: boolean = true;
	public rightSideBarOpen: boolean = false;
	public secondRightSideBarOpen: boolean = false;


	constructor() { }

	ngOnInit(): void { }

	leftSideBarToggler() {
		this.leftSideBarOpen = !this.leftSideBarOpen;
	}

	rightSideBarToggler() {
		if (this.secondRightSideBarOpen = true) {
			this.secondRightSideBarOpen = false;
			this.rightSideBarOpen = true;
		}
		else {
			this.rightSideBarOpen = true;
			this.secondRightSideBarOpen = false;
		}
	}

	secondRightSideBarToggler() {
		if (this.rightSideBarOpen = true) {
			this.rightSideBarOpen = false;
			this.secondRightSideBarOpen = true;
		}
		else {
			this.secondRightSideBarOpen = true;
			this.rightSideBarOpen = false;

		}
	}

}


