import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimoniosHomeComponent } from './patrimonios-home.component';

describe('PatrimoniosHomeComponent', () => {
  let component: PatrimoniosHomeComponent;
  let fixture: ComponentFixture<PatrimoniosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatrimoniosHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrimoniosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
