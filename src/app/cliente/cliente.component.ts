import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../core/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes : Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    // Suscribimos la variable para detectar los cambios
    this.clienteService.getClientes().subscribe(
      datos => this.clientes = datos
    );
  }

}