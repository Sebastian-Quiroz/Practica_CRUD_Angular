import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
// import { CLIENTES } from './clientes.json';
import { Observable, of } from 'rxjs';
// Importar el componente que nos permite usar peticiones Http
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  // esto evita declarar el servicio en el app.module de la aplicacion
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  private httpHeader: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient) { }

  // Creamos un metodo que obtenga los clientes
  // Volvermos este metodo asincrono
  getClientes(): Observable<Cliente[]> {
  // return of(CLIENTES); 
  return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  create(cliente: Cliente): Observable<Cliente>{

    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeader});
  }

  // Metodo para obtener cliente por ID
  getcliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeader})
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeader});
  }
}
