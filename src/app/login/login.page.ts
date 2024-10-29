import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../services/user.service';

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
        animate('300ms ease-in')
      ]),
      transition('in => void', [
        animate('300ms ease-out', style({ transform: 'translateX(100%)' }))
      ]),
    ])
  ]
})
export class LoginPage implements OnInit {
  nombre: string = '';
  contra: string = '';
  loading: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() { }

  async Iniciarsesion() {
    
    if (this.nombre.includes(' ')) {
      const toast = await this.toastController.create({
        message: 'El nombre de usuario no debe contener espacios.',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
      return; 
    }

    
    if (this.contra.trim() === '') {
      const toast = await this.toastController.create({
        message: 'La contraseña no puede estar vacía.',
        duration: 2000,
        position: 'top',
        color: 'danger'
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
          color: 'danger'
        });
        toast.present();
      }
      this.loading = false;
    }, 2000); 
  }

}
