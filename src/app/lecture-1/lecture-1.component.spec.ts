import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture1Component } from './lecture-1.component';

describe('Lecture1Component', () => {
  let component: Lecture1Component;
  let fixture: ComponentFixture<Lecture1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lecture1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lecture1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
