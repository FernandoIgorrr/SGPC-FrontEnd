import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardPatrimoniosComponent } from './menu-card-patrimonios.component';

describe('MenuCardPatrimoniosComponent', () => {
  let component: MenuCardPatrimoniosComponent;
  let fixture: ComponentFixture<MenuCardPatrimoniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCardPatrimoniosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCardPatrimoniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
