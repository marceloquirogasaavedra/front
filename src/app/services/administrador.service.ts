import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private url = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  login(credentials: { correo: string, password: string }): Observable<any> {
    return this.http.post(this.url + 'login', credentials);
  }
  crearMedico(credentials: { nombre: string, apellido_paterno: string, apellido_materno: string, estado: boolean, email: string, id_usuario: string, id_sucursal_especialidad: string }): Observable<any> {
    return this.http.post(this.url + 'medico/crear', credentials)
  }
  listarEspecialidades(): Observable<any> {
    return this.http.get(this.url + 'especialidad/listar');
  }

  crearEspecialidad(credentials: { nombre: string, descripcion: string }): Observable<any> {
    return this.http.post(this.url + 'especialidad/guardar', credentials)

  }
}
