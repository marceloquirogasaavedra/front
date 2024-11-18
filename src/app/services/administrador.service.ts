import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private url = 'http://98.85.43.120:8080/'
  constructor(private http: HttpClient) { }
  /////////////////// LOGIN ///////////////////////
  login(credentials: { correo: string, password: string }): Observable<any> {
    return this.http.post(this.url + 'login', credentials);
  }
  ////////////////// ESPECIALIDADES ////////////////////
  listarEspecialidades(): Observable<any> {
    return this.http.get(this.url + 'especialidad/listar');
  }
  crearEspecialidad(credentials: { nombre: string, descripcion: string }): Observable<any> {
    return this.http.post(this.url + 'especialidad/guardar', credentials)
  }
  /////////////////// SUCURSALES  /////////////////////////
  crearSucursal(credentials: { nombre: string, direccion: string }): Observable<any> {
    return this.http.post(this.url + 'sucursal/guardar', credentials)
  }
  listarSucursales(): Observable<any> {
    return this.http.get(this.url + 'sucursal/listar');
  }
  eliminarSucursal(credentials: { nombre: string, direccion: string }): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
      
      body: credentials
    };
    return this.http.delete(this.url + 'sucursal/eliminar', options)
  }
  actualizarSucursal(id: string, sucursal: { nombre: string, direccion: string }): Observable<any> {
     return this.http.put(`${this.url}sucursal/modificar/${id}`, sucursal) };

     obtenerSucursal(id: string): Observable<any> {
       return this.listarSucursales().pipe( map(sucursales => 
        sucursales.find((sucursal: any) => sucursal.id === id)) ); }
        
  ////////////////// MEDICO ////////////////
  listarMedicos(): Observable<any> {
    return this.http.get(this.url + 'medico/listar')
  }
  crearMedico(credentials: {
    medicoDTO: {
      nombre: string,
      apellido_paterno: string,
      apellido_materno: string,
      estado: boolean,
      email: string,
      id_usuario: string,
      id_sucursal_especialidad: string
    },
    sucursalEspecialidadDTO: {
      id_sucursal: number,
      id_especialidad: number
    }
  }): Observable<any> {
    return this.http.post(this.url + 'medico/crear', credentials);
  }
  actualizarMedico(id: string, medico: any): Observable<any> {
    return this.http.put(`${this.url}medico/modificar/${id}`, medico);
  }
  obtenerMedico(id: string): Observable<any> {
    return this.listarMedicos().pipe(map(medicos => medicos.find((medico: any) =>
      medico.id === id)));
  }
  /////////////////////////////
  guardarHorario(horario: any): Observable<any> { return this.http.post(`${this.url}horarios`, horario); }
////////////////////////////////////
  asignarEspecialidadASucursal(asignacion: { id_sucursal: string, id_especialidad: string }): Observable<any> {
     return this.http.post(`${this.url}sucursal_especialidad/asignar`, asignacion);}
}
