import { Component } from '@angular/core';
import { AdministradorService } from '../../services/administrador.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crearhorario',
  templateUrl: './crearhorario.component.html',
  styleUrl: './crearhorario.component.scss'
})
export class CrearhorarioComponent {
  medicos: any[] = []; 
  horario = {
     medicoId: '', 
     dia: '', 
     turnoMananaInicio: '',
      turnoMananaFin: '',
       turnoTardeInicio: '', 
       turnoTardeFin:'' 
      };

      constructor(private medicoService: AdministradorService, private modalService: NgbModal) { }
       ngOnInit(): void {
        this.medicoService.listarMedicos().subscribe( (response) =>
         { this.medicos = response; }, 
         (error) => { 
          console.error('Error al obtener médicos:', error); 
         } 
        )}

        abrirModal(content: any): void {
          this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then( (result) => {
           this.guardarHorario(); }, (reason) => { console.log('Modal dismissed:', reason); } ); }

           guardarHorario(): void {
            this.medicoService.guardarHorario(this.horario).subscribe( (response) => { alert('Horario guardado exitosamente!'); },
            (error) => { console.error('Error al guardar el horario:', error); alert('Hubo un error al guardar el horario.'); } ); }
}
