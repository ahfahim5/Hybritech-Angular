import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDefrentComponent } from './make-defrent.component';

describe('MakeDefrentComponent', () => {
  let component: MakeDefrentComponent;
  let fixture: ComponentFixture<MakeDefrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeDefrentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeDefrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
