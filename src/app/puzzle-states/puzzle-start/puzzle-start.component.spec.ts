import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleStartComponent } from './puzzle-start.component';

describe('PuzzleStartComponent', () => {
  let component: PuzzleStartComponent;
  let fixture: ComponentFixture<PuzzleStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
