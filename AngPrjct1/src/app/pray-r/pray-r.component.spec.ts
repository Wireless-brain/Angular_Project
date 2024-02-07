import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayRComponent } from './pray-r.component';

describe('PrayRComponent', () => {
  let component: PrayRComponent;
  let fixture: ComponentFixture<PrayRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrayRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
