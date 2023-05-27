import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimoniosListaCompletaComponent } from './patrimonios-lista-completa.component';

describe('PatrimoniosListaCompletaComponent', () => {
  let component: PatrimoniosListaCompletaComponent;
  let fixture: ComponentFixture<PatrimoniosListaCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatrimoniosListaCompletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrimoniosListaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
