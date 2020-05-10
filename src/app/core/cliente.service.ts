import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
// import { CLIENTES } from './clientes.json';
import { Observable, of } from 'rxjs';
// Importar el componente que nos permite usar peticiones Http
import { HttpClient } from "@angular/common/http";

@Injectable({
  // esto evita declarar el servicio en el app.module de la aplicacion
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  constructor( private http: HttpClient) { }

  // Creamos un metodo que obtenga los clientes
  // Volvermos este metodo asincrono
  getClientes(): Observable<Cliente[]> {
  // return of(CLIENTES); 
  return this.http.get<Cliente[]>(this.urlEndPoint);
  }
}