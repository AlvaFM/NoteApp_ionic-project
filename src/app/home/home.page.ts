import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

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
  isDarkMode: boolean = false;

contenidovisible: string = ''; 
estadoVentanaNota: string = ''; 


AlternarVentanas(estado1: string, estado2: string) {
  this.estadoVentanaNota = estado1;
  this.contenidovisible  = estado2;
}




  





 

  constructor(private userService: UserService, private router: Router, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create(); 
    this.loadTheme(); 
    this.usuarioActual = this.userService.getUsuarioActual();
    await this.userService.CrearListaNotasUser();
    this.notasUsuarioActual = await this.userService.ObtenerNotas();
  }


  async toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme(this.isDarkMode);
    await this.storage.set('darkMode', this.isDarkMode);
  }

 
  async loadTheme() {
    const darkMode = await this.storage.get('darkMode');
    this.isDarkMode = darkMode !== null ? darkMode : false;
    this.applyTheme(this.isDarkMode);
  }

  applyTheme(isDark: boolean) {
    const body = document.body;
    if (isDark) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }

  async agregarNota(nuevaNota: string) {
    if (nuevaNota !== '') {
      await this.userService.AgregarNotaUser(nuevaNota);
      this.notasUsuarioActual = await this.userService.ObtenerNotas();
      this.nuevaNota = '';
      this.AlternarVentanas('', '');
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
