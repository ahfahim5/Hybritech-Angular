import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveringImpactComponent } from './delivering-impact.component';

describe('DeliveringImpactComponent', () => {
  let component: DeliveringImpactComponent;
  let fixture: ComponentFixture<DeliveringImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveringImpactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveringImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
