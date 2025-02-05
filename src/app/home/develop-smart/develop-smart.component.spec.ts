import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopSmartComponent } from './develop-smart.component';

describe('DevelopSmartComponent', () => {
  let component: DevelopSmartComponent;
  let fixture: ComponentFixture<DevelopSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopSmartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
