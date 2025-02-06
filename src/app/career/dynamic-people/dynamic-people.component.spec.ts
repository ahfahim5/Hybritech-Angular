import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPeopleComponent } from './dynamic-people.component';

describe('DynamicPeopleComponent', () => {
  let component: DynamicPeopleComponent;
  let fixture: ComponentFixture<DynamicPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicPeopleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
