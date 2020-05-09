import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';

const routes = [
  {
    path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ClienteComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
