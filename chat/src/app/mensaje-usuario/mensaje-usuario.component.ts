import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Mensaje } from '../models/mensaje';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
 @Input() nombreUsuario: string = "default";

 nuevoMensaje: string = "";
 lstMensajes: Mensaje[] = [];
 @Output() lstMensajesEnviados = new EventEmitter<Mensaje[]>;

 guardarMensaje(){
    const mensaje = new Mensaje(this.nombreUsuario, this.nuevoMensaje, new Date());
    this.lstMensajes.push(mensaje);
    this.lstMensajesEnviados.emit(this.lstMensajes);  
    this.nuevoMensaje = '';  
  }
}
