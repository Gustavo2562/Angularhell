import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { enderecoComponent } from './endereco.component';

describe('enderecoComponent', () => {
  let component: enderecoComponent;
  let fixture: ComponentFixture<enderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ enderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(enderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
