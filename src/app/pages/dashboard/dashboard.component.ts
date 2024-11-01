import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  userEmail: string | null = '';
  mensaje: string | null = '';
  
  ngOnInit(): void {
    this.userEmail = localStorage.getItem('adminEmail');
  }
  mostrarMensaje(opcion: string): void {
    this.mensaje = `Has seleccionado ${opcion}`;
  }
}
