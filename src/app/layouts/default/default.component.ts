import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-default',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

	public leftSideBarOpen:boolean = true;
	public rightSideBarOpen:boolean = false;
	public secondRightSideBarOpen:boolean = false;


	constructor() { }

	ngOnInit(): void { }

	leftSideBarToggler() {
		this.leftSideBarOpen = !this.leftSideBarOpen;
	}

	rightSideBarToggler() {
		this.rightSideBarOpen = !this.rightSideBarOpen;
	}

	secondRightSideBarToggler() {
		this.secondRightSideBarOpen = !this.secondRightSideBarOpen;
	}

}
