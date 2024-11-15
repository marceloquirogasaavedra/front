import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarsucursalComponent } from './actualizarsucursal.component';

describe('ActualizarsucursalComponent', () => {
  let component: ActualizarsucursalComponent;
  let fixture: ComponentFixture<ActualizarsucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarsucursalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarsucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
