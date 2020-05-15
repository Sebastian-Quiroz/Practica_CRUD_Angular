import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../core/cliente.service';
//SweeteAlert2 api para mostrar alertas profesionales
import  swal  from "sweetalert2";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    // Suscribimos la variable para detectar los cambios
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  delete(cliente: Cliente): void {
    // Se implementa boton de confirmacion con sweetAlert2
    swal.fire({
      title: `Quiere eliminar a ${cliente.nombre}?`,
      text: "Recuerde que al eliminar el cliente no podra recuperlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero eliminar!'
    }).then((result) => {
      // si la opcion es si se ejecuta el servicio de delete
      if (result.value) {
        this.clienteService.delete(cliente.id)
        .subscribe(
          response => {
            // Filtrar los clientes que no han sido eliminados y mostrarlos
            //para actualizar la tabla
            this.clientes = this.clientes.filter(
              cli => cli != cliente
            );
            //mensaje de eliminado
            swal.fire(
              'Eliminado!',
              `${cliente.nombre} ha sido eliminado`,
              'success'
            )
          }
        );
      }
    })
  }
}
