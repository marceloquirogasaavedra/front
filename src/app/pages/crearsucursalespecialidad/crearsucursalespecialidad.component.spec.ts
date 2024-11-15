import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearsucursalespecialidadComponent } from './crearsucursalespecialidad.component';

describe('CrearsucursalespecialidadComponent', () => {
  let component: CrearsucursalespecialidadComponent;
  let fixture: ComponentFixture<CrearsucursalespecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearsucursalespecialidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearsucursalespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
