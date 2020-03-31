import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRightSideBarComponent } from './second-right-side-bar.component';

describe('SecondRightSideBarComponent', () => {
  let component: SecondRightSideBarComponent;
  let fixture: ComponentFixture<SecondRightSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondRightSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondRightSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
