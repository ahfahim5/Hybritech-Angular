import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBanner1Component } from './service-banner1.component';

describe('ServiceBanner1Component', () => {
  let component: ServiceBanner1Component;
  let fixture: ComponentFixture<ServiceBanner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceBanner1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceBanner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
