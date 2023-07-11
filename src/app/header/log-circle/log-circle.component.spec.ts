import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCircleComponent } from './log-circle.component';

describe('LogCircleComponent', () => {
  let component: LogCircleComponent;
  let fixture: ComponentFixture<LogCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
