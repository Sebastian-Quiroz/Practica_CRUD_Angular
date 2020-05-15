import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/core/cliente.service';
// router => permite naviegacion entre paginas
// ActivatedRoute => permite analizar las url y obtener informacion
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private clienteService: ClienteService,
    private routes: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
     this.cargarCliente();
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
        // navigate nos permite redirigirnos a algun sitio dentro de la pagina
        this.routes.navigate(['/clientes'])
        // swal es un metodo del API sweetAlert2 
        swal.fire('Nuevo Cliente', `Cliente ${this.cliente.nombre} creado con exito`, "success")
        }
      );
  }

  //Metodo que obtiene el Id del cliente que se selecciona y
  // verificaar que el cliente existe y cargar su informacion
  cargarCliente(): void {
    this.activatedRouter.params
    .subscribe( urlparams => {
      // dentro de urlparam leemos y buscaremos el parametro 'id'
      let id = urlparams['id'];
      if (id) {
        // llamamos el servicio y le pasamos el id que encontramos en urlparams
        this.clienteService.getcliente(id)
        .subscribe( cliente => {
          this.cliente = cliente;
        });
      }
    }
    );
  }

  
  upDateCliente(): void{
   this.clienteService.update(this.cliente)
   .subscribe(response => {
     this.routes.navigate(['/clientes']);
     swal.fire('Cliente actualizado', `Cliente ${this.cliente.nombre} actualizado con exito`, 'success');
   }); 
  }
}
