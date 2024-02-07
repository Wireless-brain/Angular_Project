import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedRComponent } from './bed-r.component';

describe('BedRComponent', () => {
  let component: BedRComponent;
  let fixture: ComponentFixture<BedRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BedRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BedRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
