import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private titulo: string = 'Crear Cliente';

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * create
   * @description Metodo que permitira leer datos para crear clientes
  */
  public create(): void {
    console.log('Clicked!');
    console.log(this.cliente);
  }
}
