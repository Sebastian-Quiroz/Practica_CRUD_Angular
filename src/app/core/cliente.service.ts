import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { CLIENTES } from './clientes.json';

@Injectable({
  // esto evita declarar el servicio en el app.module de la aplicacion
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  // Creamos un metodo que obtenga los clientes
  getClientes(): Cliente[] {
   return CLIENTES; 
  }
}
