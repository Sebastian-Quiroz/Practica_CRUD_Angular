import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { CLIENTES } from '../core/clientes.json';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes : Cliente[];

  constructor() { }

  ngOnInit(): void {
    this.clientes = CLIENTES;
  }

}
