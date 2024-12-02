import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../services/user.service';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(100%)' })),
      transition('void => in', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in'),
      ]),
      transition('in => void', [
        animate('300ms ease-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class LoginPage implements OnInit {
  nombre: string = '';
  contra: string = '';
  loading: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastController: ToastController,
    private platform: Platform,
    private alertController : AlertController
  ) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.confirmExitApp();
    });
  }

  async confirmExitApp() {
    const alert = await this.alertController.create({
      header: 'Confirmar salida',
      message: '¿Estás seguro de que quieres salir de la aplicación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',  
          cssClass: 'secondary',
          handler: () => {
            console.log('El usuario canceló la salida.');
          }
        },
        {
          text: 'Salir',
          handler: () => {
            App.exitApp(); 
          }
        }
      ]
    });

    await alert.present();
  }





  async scheduleWelcomeNotification() {
    console.log('Solicitando permiso para notificacion secreta');
    const permission = await LocalNotifications.requestPermissions();

    if (permission.display !== 'granted') {
      console.error('Permiso denegado para notificacion.');
      return;
    }

    console.log('Permiso concedido, programando notificación...');

    await LocalNotifications.schedule({
      notifications: [
        {
          id: 1, 
          title: '¡Cuidado con el Dino!',
          body: 'Notificacion "secreta" uwu de misterio',
          schedule: { at: new Date(new Date().getTime() + 5000) }, 
          smallIcon: 'ic_stat_icon_config_sample',
          sound: 'beep.wav', 
        },
      ],
    });

    console.log('Notificación programada.');
  }

  





  async Iniciarsesion() {
    if (this.nombre.includes(' ')) {
      const toast = await this.toastController.create({
        message: 'El nombre de usuario no debe contener espacios.',
        duration: 2000,
        position: 'top',
        color: 'danger',
      });
      toast.present();
      return;
    }

    if (this.contra.trim() === '') {
      const toast = await this.toastController.create({
        message: 'La contraseña no puede estar vacía.',
        duration: 2000,
        position: 'top',
        color: 'danger',
      });
      toast.present();
      return;
    }

    this.loading = true;
    setTimeout(async () => {
      if (await this.userService.Iniciarsesion(this.nombre, this.contra)) {
        this.router.navigate(['/home']);
      } else {
        const toast = await this.toastController.create({
          message: 'Nombre de usuario o contraseña incorrectos',
          duration: 2000,
          position: 'top',
          color: 'danger',
        });
        toast.present();
      }
      this.loading = false;
    }, 2000);
  }

  // limpiarAlmacenamiento() {
  //   this.userService.clearStorage();
  // }
}
