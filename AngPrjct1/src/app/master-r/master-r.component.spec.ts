import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRComponent } from './master-r.component';

describe('MasterRComponent', () => {
  let component: MasterRComponent;
  let fixture: ComponentFixture<MasterRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
