import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleContainerComponent } from './puzzle-container.component';

describe('PuzzleContainerComponent', () => {
  let component: PuzzleContainerComponent;
  let fixture: ComponentFixture<PuzzleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
