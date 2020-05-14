import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/core/cliente.service';
import { Router } from '@angular/router';
//SweeteAlert2 api para mostrar alertas profesionales
import  swal  from "sweetalert2";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear Cliente';

  constructor(private clienteService: ClienteService,
    private routes: Router) { }

  ngOnInit(): void {
  }

  /**
   * create
   * Metodo que permitira leer datos para crear clientes
  */
  public create(): void {
    console.log('Clicked!');
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      response => {
        this.routes.navigate(['/clientes'])
        // swal es un metodo del API sweetAlert2 
        swal.fire('Nuevo Cliente', `Cliente ${this.cliente.nombre} creado con exito`, "success")
        }
      );
  }
}
