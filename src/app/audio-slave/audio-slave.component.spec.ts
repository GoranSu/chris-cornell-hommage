import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSlaveComponent } from './audio-slave.component';

describe('AudioSlaveComponent', () => {
  let component: AudioSlaveComponent;
  let fixture: ComponentFixture<AudioSlaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioSlaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioSlaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
