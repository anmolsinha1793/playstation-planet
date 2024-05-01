import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrebookingDetailsComponent } from './prebooking-details.component';

describe('PrebookingDetailsComponent', () => {
  let component: PrebookingDetailsComponent;
  let fixture: ComponentFixture<PrebookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrebookingDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrebookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
