import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocSciUnessay2Component } from './soc-sci-unessay2.component';

describe('SocSciUnessay2Component', () => {
  let component: SocSciUnessay2Component;
  let fixture: ComponentFixture<SocSciUnessay2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocSciUnessay2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocSciUnessay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
