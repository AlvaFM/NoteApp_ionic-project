import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _Storage: Storage | null = null;
  private usuarioActual: string = '';
  private notaIdCounter: number = 0; 

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._Storage = storage;
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

  // Cambiado para recibir un objeto con nombre y contraseña
  async CrearUsuario(usuario: { nombre: string; contraseña: string }): Promise<boolean> {
    const usuarios = (await this._Storage?.get('usuarios')) || [];
    
    if (!(await this.VerificarUsuario(usuario.nombre))) {
      return false;
    }

    usuarios.push(usuario); // Usar el objeto completo
    await this._Storage?.set('usuarios', usuarios);
    return true;
  }

  async Iniciarsesion(nombre: string, contra: string): Promise<boolean> {
    const usuarios = await this._Storage?.get('usuarios') || [];
    for (const user of usuarios) {
      if (user.nombre === nombre && user.contraseña === contra) {
        this.usuarioActual = user.nombre; 
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
        id: this.notaIdCounter++, // Asignar ID único
        contenido: nota
      };
      usuariosNotas[this.usuarioActual].push(nuevaNota);
      await this._Storage?.set('usuariosNotas', usuariosNotas);
      return true;
    } else {
      alert('No se ha iniciado sesión');
      return false;
    }
  }

  async ObtenerNotas(): Promise<{ id: number; contenido: string }[]> {
    const usuariosNotas = (await this._Storage?.get('usuariosNotas')) || {};
    return usuariosNotas[this.usuarioActual] || [];
  }

  // Método para obtener el usuario actual
  getUsuarioActual(): string {
    return this.usuarioActual;
  }
}
