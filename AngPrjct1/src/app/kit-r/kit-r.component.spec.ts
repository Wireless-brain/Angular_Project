import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitRComponent } from './kit-r.component';

describe('KitRComponent', () => {
  let component: KitRComponent;
  let fixture: ComponentFixture<KitRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KitRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
