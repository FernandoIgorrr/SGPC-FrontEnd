import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimonioCadastroComponent } from './patrimonio-cadastro.component';

describe('PatrimonioCadastroComponent', () => {
  let component: PatrimonioCadastroComponent;
  let fixture: ComponentFixture<PatrimonioCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatrimonioCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrimonioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
