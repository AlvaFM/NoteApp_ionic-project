import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../user.service';
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
  notasUsuarioActual: string[] = [];  

  constructor(private userService: UserService, private Router: Router) { }

  ngOnInit() {
    this.usuarioActual = this.userService.usuarioActual;
    this.userService.CrearListaNotasUser();
    this.notasUsuarioActual = this.userService.ObtenerNotas();
  }

  agregarNota(nuevaNota: string) {
    if (nuevaNota !== '') {
      this.userService.AgregarNotaUser(nuevaNota);
      this.notasUsuarioActual = this.userService.ObtenerNotas();
    } else {
      // Mostrar mensaje con Toast
    }
  }
  
  cerrarSesion() {
    this.Router.navigate(['/login']);
  }
}

