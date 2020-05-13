import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/core/cliente.service';
import { Router } from '@angular/router';

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
      response => this.routes.navigate(['/clientes'])
    );
  }
}
