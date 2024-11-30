import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './auth.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _Storage: Storage | null = null;
  private usuarioActual: string = '';

  constructor(private storage: Storage, private authService: AuthService
    , private datePipe: DatePipe
  ) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._Storage = storage;

    
    this.usuarioActual = (await this._Storage.get('usuarioActual')) || '';
  }

  setUsuarioActual(nombre: string) {
    this.usuarioActual = nombre;
    this._Storage?.set('usuarioActual', nombre); 
  }

  
  async VerificarUsuario(nombre: string): Promise<boolean> {
    const usuarios = await this._Storage?.get('usuarios') || [];
    for (const user of usuarios) {
      if (user.nombre === nombre) {
        alert('El nombre de usuario ya existe');
        return false;
      }
    }
    return true;
  }

  async CrearUsuario(usuario: { nombre: string; contraseña: string }): Promise<boolean> {
    const usuarios = (await this._Storage?.get('usuarios')) || [];
    
    if (!(await this.VerificarUsuario(usuario.nombre))) {
      return false;
    }

    usuarios.push(usuario); 
    await this._Storage?.set('usuarios', usuarios);
    return true;
  }

  async Iniciarsesion(nombre: string, contra: string): Promise<boolean> {
    const usuarios = await this._Storage?.get('usuarios') || [];
    for (const user of usuarios) {
      if (user.nombre === nombre && user.contraseña === contra) {
        this.setUsuarioActual(user.nombre); 
        this.authService.login('token'); 
        return true;
      }
    }
    return false;
  }

  async restablecercontra(nombre: string, newcontra: string): Promise<boolean> {
    const usuarios = (await this._Storage?.get('usuarios')) || [];
    
    for (const user of usuarios) {
      if (user.nombre === nombre) {
        user.contraseña = newcontra;
        await this._Storage?.set('usuarios', usuarios);
        return true;
      }
    }
    return false;
  }

  async CrearListaNotasUser(): Promise<void> {
    const usuariosNotas = (await this._Storage?.get('usuariosNotas')) || {};
    
    if (!usuariosNotas[this.usuarioActual] && this.usuarioActual !== '') {
      usuariosNotas[this.usuarioActual] = [];
      await this._Storage?.set('usuariosNotas', usuariosNotas);
    }
  }

  async AgregarNotaUser(nota: string): Promise<boolean> {
    const usuariosNotas = (await this._Storage?.get('usuariosNotas')) || {};
    
    if (this.usuarioActual && usuariosNotas[this.usuarioActual]) {
      const nuevaNota = {
        id: Date.now() + Math.floor(Math.random() * 100000),
        contenido: nota,
        fecha: new Date().toISOString() 
      };
      
     
      usuariosNotas[this.usuarioActual].unshift(nuevaNota); 
      await this._Storage?.set('usuariosNotas', usuariosNotas);
      return true;
    } else {
      alert('No se ha iniciado sesión');
      return false;
    }
  }
  
  async ObtenerNotas(): Promise<{ id: number; contenido: string; fecha: string }[]> {
    const usuariosNotas = (await this._Storage?.get('usuariosNotas')) || {};
    const notas = usuariosNotas[this.usuarioActual] || [];
    const notasConFecha = notas.filter((nota: { fecha: string }) => {
      return nota.fecha && !isNaN(new Date(nota.fecha).getTime());
    });
    notasConFecha.forEach((nota: { fecha: string }) => {
      nota.fecha = this.datePipe.transform(nota.fecha, 'dd/MM/yy') || '';
    });
    return notasConFecha.sort((a: { fecha: string }, b: { fecha: string }) => {
      return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
    });
  }
  
  
  
  
  
  
  
  
  

  async ModificarNota(id: number, nuevoContenido: string): Promise<boolean> {
    const usuariosNotas = (await this._Storage?.get('usuariosNotas')) || {};
    const notas = usuariosNotas[this.usuarioActual] || [];
  
    for (const nota of notas) {
      if (nota.id === id) {
        nota.contenido = nuevoContenido; 
        await this._Storage?.set('usuariosNotas', usuariosNotas);  
        return true;
      }
    }
  
    return false;  
  }

  async EliminarNota(id: number): Promise<boolean> {
    const usuariosNotas = (await this._Storage?.get('usuariosNotas')) || {};
    const notas: { id: number; contenido: string }[] = usuariosNotas[this.usuarioActual] || [];
  
    const indice = notas.findIndex(nota => nota.id === id);  
  
    if (indice !== -1) {
      notas.splice(indice, 1); 
      usuariosNotas[this.usuarioActual] = notas;  
      await this._Storage?.set('usuariosNotas', usuariosNotas);  
      return true;
    }
  
    return false;  
  }

  async CrearListaEventosUser(): Promise<void> {
    const usuariosEventos = (await this._Storage?.get('usuariosEventos')) || {};
    
    if (!usuariosEventos[this.usuarioActual]) {
      usuariosEventos[this.usuarioActual] = [];
      await this._Storage?.set('usuariosEventos', usuariosEventos);
    }
  }
  
  async AgregarEventoUser(evento: { date: string; event: string }): Promise<boolean> {
    const usuariosEventos = (await this._Storage?.get('usuariosEventos')) || {};
  
    if (this.usuarioActual && usuariosEventos[this.usuarioActual]) {
      usuariosEventos[this.usuarioActual].push(evento); 
      await this._Storage?.set('usuariosEventos', usuariosEventos);  
      return true;
    } else {
      alert('No se ha iniciado sesión');
      return false;
    }
  }
  
  async ObtenerEventos(): Promise<{ date: string; event: string }[]> {
    const usuariosEventos = (await this._Storage?.get('usuariosEventos')) || {};
    return usuariosEventos[this.usuarioActual] || []; 
  }
  
  async getUsuarioActual(): Promise<string | null> {
    return await this._Storage?.get('usuarioActual') || null;
  }
  


  async CerrarSesion(): Promise<void> {
    this.usuarioActual = ''; 
    await this._Storage?.remove('usuarioActual'); 
    this.authService.logout(); 
  }


  async clearStorage(): Promise<void> {
    if (this._Storage) {
      await this._Storage.clear();
    }
  }


}
