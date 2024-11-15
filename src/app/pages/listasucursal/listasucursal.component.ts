import { Component } from '@angular/core';
import { AdministradorService } from '../../services/administrador.service';

@Component({
  selector: 'app-listasucursal',
  templateUrl: './listasucursal.component.html',
  styleUrl: './listasucursal.component.scss'
})
export class ListasucursalComponent {
  constructor(private sucursalService: AdministradorService) { }
  sucursales: any[] = [];
  ngOnInit(): void {
    this.sucursalService.listarSucursales().subscribe(
      (response) => {
        this.sucursales = response;
        console.log(response);
      },
      (error) => {
        console.error('Error al obtener especialidades:', error);
      }
    );
}

eliminarSucursal(sucursal:{ nombre: string, direccion: string}): void {
  const sucursalEliminar = { nombre: sucursal.nombre, direccion: sucursal.direccion };
   this.sucursalService.eliminarSucursal(sucursalEliminar).subscribe( (response) =>{
     alert('Sucursal eliminada exitosamente!'); 
     this.ngOnInit()
     },
      (error) => { 
        console.log(sucursalEliminar)
    console.error('Error al eliminar la sucursal:', error); 
    alert('Hubo un error al eliminar la sucursal.');
   });
 }
}
