import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.page.html',
  styleUrls: ['./newuser.page.scss'],
})
export class NewuserPage implements OnInit {

  constructor(
    private userService: UserService,
    private Router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  newuser: string = '';
  password: string = '';
  comfirmpassword: string = '';

  async presentToast(message: string, duration: number = 5000) {
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

  async CrearUsuario() {
    if (this.password !== this.comfirmpassword) {
      await this.presentAlert('Error', 'Las contraseñas no coinciden', ['OK']);
      return;
    }

    const exito = await this.userService.CrearUsuario(this.newuser, this.password);

    if (exito) {
      await this.presentToast('Usuario creado con éxito');
      this.Router.navigate(['/login']);
    } else {
      await this.presentAlert('Error', 'No se pudo crear el usuario', ['OK']);
    }
  }
}

