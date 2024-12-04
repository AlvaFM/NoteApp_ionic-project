
# Proyecto Dinotes

## Descripción del Proyecto
Dinotes es una aplicación móvil construida con Ionic Framework, diseñada para gestionar
notas de manera sencilla y eficiente. Permite a los usuarios crear, editar, eliminar y
visualizar notas, así como almacenarlas localmente en su dispositivo usando SQLite/Storage.
 Además, la aplicación tiene soporte para notificaciones locales, uso de camera y utiliza una interfaz amigable para mejorar la experiencia del usuario.

## Instalación

### Prerequisitos
Asegúrate de tener instalados los siguientes componentes en tu sistema:

- **Node.js** (version 18.x.x o superior)
- **Ionic CLI**: `npm install -g @ionic/cli`
- **Capacitor**: `npm install @capacitor/core @capacitor/cli`
- **Angular**: `npm install @angular/core @angular/cli`

### Pasos de instalación
1. Clona el repositorio del proyecto:

```bash
git clone https://github.com/AlvaFM/NoteApp_ionic-project.git
cd Dinotes
```

2. Instala las dependencias necesarias:

```bash
npm install
```

3. Configura Capacitor para que apunte al proyecto:

```bash
npx cap add android
```

4. Ejecuta la aplicación en un servidor local:

```bash
ionic serve
```

5. Para probar la aplicación en dispositivos físicos, ejecuta los siguientes comandos:

- Para Android:
```bash
ionic build
```
```bash
npx cap sync 
```
```bash
npx cap open android
```



## Testing

La aplicación ha sido probada usando la siguiente herramienta (Lo agregue por el intento pero jasmine dio problemas) :

- **Jasmine** para pruebas unitarias.


Para ejecutar las pruebas jasmine:

```bash
ng test
```


## Responsabilidades del Equipo

Alvaro :Integración de servicios.
	Creación del almacenamiento local.
	Codificación de funcionalidades (Eliminar, borrar, editar, almacenar notas).
	Organización de archivos en pages/ y archivos.ts.
	Instalación de Capacitor Camera.
	Corrección de errores y manejo de compatibilidad de códigos.
	Creación de la firma aplicación.
	Creación del archivo APK.
	

Aurora:Arreglos en los archivos SCSS.
	Organización de la aplicación.
	Implementación del modo claro/oscuro.
	Agregó botones para retroceder.
	Inició el guard.
	Trabajó en la implementación de gifs.
	Configuración de las notificaciones locales.




Ricardo: Desarrollo de la funcionalidad de calendario.
	Gestión de eventos y API.
	Dos intentos con Jasmine. 



## Enlaces

- [Repositorio del Proyecto](https://github.com/AlvaFM/NoteApp_ionic-project.git)
- [Enlace descarga apk](https://sourceforge.net/projects/dinotesoficial/ )


---

