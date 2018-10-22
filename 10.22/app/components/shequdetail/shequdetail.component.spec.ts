import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShequdetailComponent } from './shequdetail.component';

describe('ShequdetailComponent', () => {
  let component: ShequdetailComponent;
  let fixture: ComponentFixture<ShequdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShequdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShequdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
