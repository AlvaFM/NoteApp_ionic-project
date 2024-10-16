import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(100%)' })),
      transition('void => in', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in')
      ]),
      transition('in => void', [
        animate('300ms ease-out', style({ transform: 'translateX(100%)' }))
      ]),
    ])
  ]
})
export class HomePage implements OnInit {
  nuevaNota: string = '';
  usuarioActual: string = '';
  notasUsuarioActual: { id: number; contenido: string }[] = []; 

  constructor(private userService: UserService, private Router: Router) { }

  async ngOnInit() { 
    this.usuarioActual = this.userService.getUsuarioActual(); 
    await this.userService.CrearListaNotasUser(); 
    this.notasUsuarioActual = await this.userService.ObtenerNotas(); 
  }

  async agregarNota(nuevaNota: string) {
    if (nuevaNota !== '') {
      await this.userService.AgregarNotaUser(nuevaNota); 
      this.notasUsuarioActual = await this.userService.ObtenerNotas(); 
      this.nuevaNota = '';
    } else {
     
      console.error('La nota no puede estar vacía.'); 
    }
  }
  
  cerrarSesion() {
    this.Router.navigate(['/login']);
  }
}
