import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
    this.loading = true;
    setTimeout(async () => {
      if (this.userService.Iniciarsesion(this.nombre, this.contra)) {
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
