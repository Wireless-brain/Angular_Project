import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GusetRComponent } from './guset-r.component';

describe('GusetRComponent', () => {
  let component: GusetRComponent;
  let fixture: ComponentFixture<GusetRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GusetRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GusetRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
