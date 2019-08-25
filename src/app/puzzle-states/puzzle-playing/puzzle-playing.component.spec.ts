import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzlePlayingComponent } from './puzzle-playing.component';

describe('PuzzlePlayingComponent', () => {
  let component: PuzzlePlayingComponent;
  let fixture: ComponentFixture<PuzzlePlayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzlePlayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzlePlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
