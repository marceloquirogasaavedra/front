import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private url = 'http://192.168.60.3:8080/'
  private url2='http://localhost:8080/'


  constructor(private http: HttpClient) {}
  obtenertoken(): Observable<any>{
    return this.http.get(this.url+'/login')
  }
  login(credentials: { correo: string, password: string }): Observable<any> {
    return this.http.post(this.url  +  'login', credentials);
  }
  crearMedico(credentials:{nombre:string,apellido_paterno:string,apellido_materno:string,estado:boolean,email:string,id_sucursal_especialidad:BigInt}):Observable<any>{
    return this.http.post(this.url2 + 'medico/crear',credentials)
  }
}
