import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimoniosListComponent } from './patrimonios-list.component';

describe('PatrimoniosListComponent', () => {
  let component: PatrimoniosListComponent;
  let fixture: ComponentFixture<PatrimoniosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatrimoniosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrimoniosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
