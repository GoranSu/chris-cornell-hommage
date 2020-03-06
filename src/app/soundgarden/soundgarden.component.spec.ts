import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundgardenComponent } from './soundgarden.component';

describe('SoundgardenComponent', () => {
  let component: SoundgardenComponent;
  let fixture: ComponentFixture<SoundgardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundgardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundgardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
