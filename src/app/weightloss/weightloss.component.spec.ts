import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightlossComponent } from './weightloss.component';

describe('WeightlossComponent', () => {
  let component: WeightlossComponent;
  let fixture: ComponentFixture<WeightlossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightlossComponent]
    });
    fixture = TestBed.createComponent(WeightlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
