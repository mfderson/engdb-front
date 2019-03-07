import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaVendedorPage } from './edita-vendedor.page';

describe('EditaVendedorPage', () => {
  let component: EditaVendedorPage;
  let fixture: ComponentFixture<EditaVendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaVendedorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
