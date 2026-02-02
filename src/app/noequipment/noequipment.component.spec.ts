import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoequipmentComponent } from './noequipment.component';

describe('NoequipmentComponent', () => {
  let component: NoequipmentComponent;
  let fixture: ComponentFixture<NoequipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoequipmentComponent]
    });
    fixture = TestBed.createComponent(NoequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
