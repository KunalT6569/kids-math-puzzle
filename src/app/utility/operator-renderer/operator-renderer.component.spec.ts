import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorRendererComponent } from './operator-renderer.component';

describe('OperatorRendererComponent', () => {
  let component: OperatorRendererComponent;
  let fixture: ComponentFixture<OperatorRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
