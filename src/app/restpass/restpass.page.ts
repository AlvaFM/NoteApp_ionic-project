import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restpass',
  templateUrl: './restpass.page.html',
  styleUrls: ['./restpass.page.scss'],
})
export class RestpassPage implements OnInit {
  newcontra: string = '';
  confirmacontra: string = '';
  nombre: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  async presentToast(message: string, duration: number = 4000) {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'top'
    });
    toast.present();
  }

  async presentAlert(header: string, message: string, buttons: string[]) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons
    });
    await alert.present();
  }

  async restablecercontra() {
    
    if (this.newcontra.trim() === '' || this.confirmacontra.trim() === '') {
      this.presentAlert('Error', 'Las contraseñas no pueden estar vacías', ['OK']);
      return;
    }

    if (this.newcontra !== this.confirmacontra) {
      this.presentAlert('Error', 'Las contraseñas no coinciden', ['OK']);
      return;
    }

    const success = await this.userService.restablecercontra(this.nombre, this.newcontra);

    if (success) {
      this.presentToast('Contraseña restablecida con éxito');
      this.router.navigate(['/login']);
    } else {
      this.presentAlert('Error', 'Nombre de usuario no encontrado', ['OK']);
    }
  }
}
