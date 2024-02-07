import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathRComponent } from './bath-r.component';

describe('BathRComponent', () => {
  let component: BathRComponent;
  let fixture: ComponentFixture<BathRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BathRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BathRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
