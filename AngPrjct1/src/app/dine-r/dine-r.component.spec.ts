import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DineRComponent } from './dine-r.component';

describe('DineRComponent', () => {
  let component: DineRComponent;
  let fixture: ComponentFixture<DineRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DineRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DineRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
