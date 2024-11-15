import { Component } from '@angular/core';
import { AdministradorService } from '../../services/administrador.service';

@Component({
  selector: 'app-crearsucursalespecialidad',
  templateUrl: './crearsucursalespecialidad.component.html',
  styleUrl: './crearsucursalespecialidad.component.scss'
})
export class CrearsucursalespecialidadComponent {
  sucursales: any[] = [];
  especialidades: any[] = [];

  asignacion = { 
    id_sucursal: '',
     id_especialidad: '' };
  constructor(private medicoService: AdministradorService) { };

  ngOnInit(): void {
    this.medicoService.listarSucursales().subscribe(
      (response) => {
        console.log('Lista de sucursales:', response); 
        this.sucursales = response;
      },
      (error) => {
        console.error('Error al obtener sucursales:', error);
      }
    );

    this.medicoService.listarEspecialidades().subscribe(
      (response) => {
        console.log('Lista de especialidades:', response); 
        this.especialidades = response;
      },
      (error) => {
        console.error('Error al obtener especialidades:', error);
      }
    );
  }

  asignarEspecialidad(): void { if (this.asignacion.id_sucursal !== '' && this.asignacion.id_especialidad !== '') { 
    this.medicoService.asignarEspecialidadASucursal(this.asignacion).subscribe( (response) => { 
      alert('Especialidad asignada exitosamente!'); }, (error) =>
         { 
          console.error('Error al asignar la especialidad:', error);
     alert('Hubo un error al asignar la especialidad.'); } ); } else { alert('Debe seleccionar una sucursal y una especialidad'); } }
}
