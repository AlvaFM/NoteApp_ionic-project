import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuarios = [
    {nombre: 'Admin', contraseña : '12345'}
  
   ];
   
   usuariosNotas: { [usuario: string]: string[] } = {
    'Admin': ['Hola, soy el admin']
  };

  usuarioActual: string=''



  

  constructor() { }
  

  VerificarUsuario(nombre: string): boolean {
    for (const user of this.usuarios) {
      if (user.nombre === nombre) {
        alert('El nombre de usuario ya existe');
        return false; 
      }
    }
    return true; 
  }
  
  CrearUsuario(nombre: string, contraseña: string): boolean {
 
    if (!this.VerificarUsuario(nombre)) {
      return false; 
    }
    
    this.usuarios.push({ nombre, contraseña });
    this.usuariosNotas[nombre] = [];
    return true; 
  }
  
  
  
  

  Iniciarsesion(nombre: string, contra: string): boolean {
    for (const user of this.usuarios) {
      if (user.nombre === nombre && user.contraseña === contra) {
        this.usuarioActual = user.nombre;
        return true; 
      }
    }
    return false; 

 }

 restablecercontra(nombre: string, newcontra: string): boolean {
  for (const user of this.usuarios) {
    if (user.nombre === nombre) {
      user.contraseña = newcontra; 
      return true; 
    }
  }
  return false; 
}

CrearListaNotasUser(): void {
  if (!this.usuariosNotas[this.usuarioActual] && this.usuarioActual !== '') {
    this.usuariosNotas[this.usuarioActual] = [];  
  }
}

AgregarNotaUser(nota: string): boolean {
  if (this.usuarioActual && this.usuariosNotas[this.usuarioActual]) {
    this.usuariosNotas[this.usuarioActual].push(nota);  
    return true;
  } else {
    alert('No se ha iniciado sesión');
    return false;
  }
}

ObtenerNotas(): string[] {
  return this.usuariosNotas[this.usuarioActual] || [];  
}
}