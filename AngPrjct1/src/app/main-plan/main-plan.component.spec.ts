import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlanComponent } from './main-plan.component';

describe('MainPlanComponent', () => {
  let component: MainPlanComponent;
  let fixture: ComponentFixture<MainPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
