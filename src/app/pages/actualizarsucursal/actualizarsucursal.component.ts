import { Component } from '@angular/core';
import { AdministradorService } from '../../services/administrador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizarsucursal',
  templateUrl: './actualizarsucursal.component.html',
  styleUrl: './actualizarsucursal.component.scss'
})
export class ActualizarsucursalComponent {
  sucursal = { nombre: '', direccion: '', };
  id: string | null = null;
  constructor(private sucursalService: AdministradorService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
      this.obtenerSucursal(this.id);
    }
  }

  obtenerSucursal(id: string): void {
    this.sucursalService.obtenerSucursal(id).subscribe(response => {
      if (response) {
        this.sucursal = response;
      } else {
        console.error('Sucursal no encontrada');
      }
    }, error => { console.error('Error al obtener la sucursal:', error); });
  }

  actualizarSucursal(): void {
    if (this.sucursal.nombre !== '' && this.sucursal.direccion !== '' && this.id) {
      this.sucursalService.actualizarSucursal(this.id, this.sucursal).subscribe(response => {
        console.log('Sucursal actualizada:', response); 
        alert('Sucursal actualizada exitosamente!');
        this.router.navigate(['/ver-sucursales']);
      },
        error => {
          console.error('Error:', error);
          alert('Hubo un error al actualizar la sucursal.');
        });
    }
    else { alert('Los campos no pueden estar vacíos'); }
  }
}
