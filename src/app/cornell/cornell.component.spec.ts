import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornellComponent } from './cornell.component';

describe('CornellComponent', () => {
  let component: CornellComponent;
  let fixture: ComponentFixture<CornellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
