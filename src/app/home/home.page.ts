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
  notasUsuarioActual: { id: number; contenido: string; editando?: boolean }[] = [];
  nuevoContenido: string = '';

  constructor(private userService: UserService, private router: Router) {}

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

  async eliminarNota(id: number) {
    await this.userService.EliminarNota(id);
    this.notasUsuarioActual = await this.userService.ObtenerNotas();
  }

  async editarNota(id: number, nuevoContenido: string) {
    if (nuevoContenido.trim() !== '') {
      await this.userService.ModificarNota(id, nuevoContenido);
      this.notasUsuarioActual = await this.userService.ObtenerNotas();
    } else {
      console.error('El contenido no puede estar vacío.');
    }
  }

  iniciarEdicion(nota: { id: number; contenido: string; editando?: boolean }) {
    nota.editando = true;
    this.nuevoContenido = nota.contenido; 
  }

  cancelarEdicion(nota: { id: number; editando?: boolean }) {
    nota.editando = false;
    this.nuevoContenido = ''; 
  }

  async guardarEdicion(nota: { id: number; editando?: boolean }) {
    if (this.nuevoContenido.trim() !== '') {
      await this.editarNota(nota.id, this.nuevoContenido);
      nota.editando = false;
      this.nuevoContenido = ''; 
    } else {
      console.error('El contenido no puede estar vacío.');
    }
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}