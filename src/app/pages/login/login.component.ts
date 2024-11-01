import { Component } from '@angular/core';
import { AdministradorService } from '../../services/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
   styleUrl: './login.component.scss'
  // styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  correo: string = '';
  password: string = '';
  recordar: boolean=false;
   constructor(private administradorService: AdministradorService, private router: Router) {}
   
   iniciarSesion(): void {
     
   if(!this.correo && !this.password){
    alert("Por favor, ingresa un correo y  una contraseña");
    return;

   }    
  if (!this.correo) {
    alert("Por favor, ingresa un correo");
    return;
  }
  if (!this.password) {
    alert("Por favor,  ingresa una contraseña");
    return;
  }
  if (!this.validarCorreo(this.correo)) {
    alert("Por favor, ingresa un correo válido");
    return;
  }

  if (this.password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
    return;
  }
  const credentials = { correo: this.correo, password: this.password };
  this.administradorService.login(credentials).subscribe(response => {
    console.log('Token:', response.token);

      if(response.token!=null && this.correo=='12h09icsos@gmail.com'){
        alert("Inicio de sesión exitosamente!");
        this.router.navigateByUrl("dashboard")
        localStorage.setItem('adminEmail',this.correo);
        if(this.recordar){
          localStorage.setItem('adminPassword',this.password)
        }
      }
     }, error => {
      console.error('Error:', error);
      alert("Los datos proporcionados no corresponden a un usuario existente (verifica tu correo o contraseña)");
    }
    );
   }
   validarCorreo(correo: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(correo);
  }
}
