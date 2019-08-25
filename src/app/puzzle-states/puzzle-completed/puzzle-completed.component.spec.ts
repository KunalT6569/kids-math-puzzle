import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleCompletedComponent } from './puzzle-completed.component';

describe('PuzzleCompletedComponent', () => {
  let component: PuzzleCompletedComponent;
  let fixture: ComponentFixture<PuzzleCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
