import { Component, Input, OnInit } from '@angular/core';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';
import { Mensaje } from '../models/mensaje';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent, CommonModule, FormsModule, NgStyle],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent implements OnInit{
  //nombre de usuario q se le van a pasar al hijo
  @Input() nombresUsuario: string[] = [];
  ngOnInit(): void {
    this.nombresUsuario = ["Martín","Mateo"];
  }

  mensajesU1: Mensaje[] = [];
  onLstMensajesRecibidosU1(mensajesRecibidos: Mensaje[]){
    this.mensajesU1 = mensajesRecibidos;
  }
  
  mensajesU2: Mensaje[] = [];
  onLstMensajesRecibidosU2(mensajesRecibidos: Mensaje[]){
    this.mensajesU2 = mensajesRecibidos;
  }
 
}
