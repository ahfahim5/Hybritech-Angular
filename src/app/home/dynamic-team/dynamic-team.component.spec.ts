import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTeamComponent } from './dynamic-team.component';

describe('DynamicTeamComponent', () => {
  let component: DynamicTeamComponent;
  let fixture: ComponentFixture<DynamicTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
