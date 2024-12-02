import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


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
  usuarioActual: string | null = null;
  notasUsuarioActual: { id: number; contenido: string; fecha: string; editando?: boolean,imgUrl?: string | null }[] = [];
  nuevoContenido: string = '';
  isDarkMode: boolean = false;
  contenedovisible: string = 'listaNotas';
  estadoVentanaNota: boolean = false;
  isLoggingOut: boolean = false;

  constructor(
  private userService: UserService, 
  private router: Router, 
  private storage: Storage, 
  private authService: AuthService,) {}

  async ngOnInit() {
    
    await this.storage.create();
    this.loadTheme();
    this.usuarioActual = await this.userService.getUsuarioActual();
    await this.userService.CrearListaNotasUser();
    this.notasUsuarioActual = await this.userService.ObtenerNotas();
    setTimeout(() => {
      this.programarNotificacion('bienvenida');
    }, 3000);

    
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




  async programarNotificacion(tipo: string) {
    console.log('Solicitando permiso para notificaciónes...');
    const permission = await LocalNotifications.requestPermissions();
  
    if (permission.display !== 'granted') {
      console.error('Permiso denegado para notificación.');
      return;
    }
  
    console.log('Permiso concedido, programando notificación...');
  
    let titulo: string;
    let mensaje: string;
    if (tipo === 'bienvenida') {
      titulo = '¡Bienvenido!';
      mensaje = 'Es un gusto verte de vuelta :)';
      console.log('Mensaje de bienvenida listo');

    } else if (tipo === 'nota') {
      titulo = '¡Nota agregada!';
      mensaje = 'Tu nota ha sido agregada exitosamente :D';
      console.log('Mensaje de agregado de nota listo');
    } else {
      console.error('Tipo de notificación no reconocido');
      return;
    }
    
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: titulo,
          body: mensaje,
          schedule: { at: new Date(new Date().getTime() + 5000) },
          smallIcon: 'ic_stat_icon_config_sample',
          sound: 'beep.wav',
        },
      ],
    });
  
    console.log('Notificación programada.');
  }

  
  async agregarNota(nuevaNota: string) {
    if (nuevaNota.trim() !== '') {
      await this.userService.AgregarNotaUser(nuevaNota);
      this.notasUsuarioActual = await this.userService.ObtenerNotas();
      this.nuevaNota = '';
      this.AlternarVentanas();
      this.programarNotificacion('nota');

    } else {
      console.error('La nota no puede estar vacía.');
    }
  }

  async eliminarNota(id: number) {
    await this.userService.EliminarNota(id);
    this.notasUsuarioActual = await this.userService.ObtenerNotas();
  }


  async seleccionarImagen(notaId: number) {
    console.log('En teoria ahora deberias seleccionar imagen desde el movil')
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,  
      quality: 100
    });

    const imgUrl = image.webPath;
    const exito = await this.userService.AgregarImagenANota(notaId, imgUrl);

    if (exito) {
      this.notasUsuarioActual = await this.userService.ObtenerNotas();
      console.log('Imagen asociada a la nota con éxito');
    } else {
      console.error('No se pudo asociar la imagen a la nota');
    }
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

  async guardarEdicion(nota: { id: number; contenido: string; editando?: boolean }) {
    if (this.nuevoContenido.trim() !== '') {
      await this.editarNota(nota.id, this.nuevoContenido);
      nota.editando = false;
      this.nuevoContenido = '';
    } else {
      console.error('El contenido no puede estar vacío.');
    }
  }



  cancelarEdicion(nota: { editando?: boolean }) {
    nota.editando = false;
    this.nuevoContenido = '';
  }

  cerrarSesion() {
    this.isLoggingOut = true;
    this.authService.logout();
    setTimeout(() => {
      this.isLoggingOut = false; 
      this.router.navigate(['/login']); 
    }, 3000); 
  }

  AlternarVentanas() {
    this.estadoVentanaNota = !this.estadoVentanaNota;
    this.contenedovisible = this.estadoVentanaNota ? 'nuevaNota' : 'listaNotas';
  }


}
