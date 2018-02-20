import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbButtonsComponent } from './cb-buttons.component';

describe('CbButtonsComponent', () => {
  let component: CbButtonsComponent;
  let fixture: ComponentFixture<CbButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
