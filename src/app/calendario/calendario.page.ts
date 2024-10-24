import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute

@Component({
  selector: 'app-calendario',
  templateUrl: 'calendario.page.html',
  styleUrls: ['calendario.page.scss'],
})
export class CalendarioPage {
  selectedDate: string = new Date().toISOString().split('T')[0]; // Fecha actual
  event: string = ''; // Evento a agregar
  events: { date: string; event: string }[] = []; // Lista de eventos
  userId: string = ''; // Aquí se obtendrá el ID del usuario actual

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.userId = params['userId']; // Obtén el userId desde los parámetros de la ruta
    });
    this.loadEvents(); // Cargar eventos al iniciar el componente
  }

  selectDate(event: any) {
    this.selectedDate = event.target.value; // Actualizar la fecha seleccionada
  }

  addEvent() {
    if (this.event) {
      const newEvent = { date: this.selectedDate, event: this.event };
      this.events.push(newEvent); // Agregar el nuevo evento a la lista
      this.saveEvents(); // Guardar los eventos en localStorage
      this.event = ''; // Limpiar el campo de entrada
    }
  }

  saveEvents() {
    localStorage.setItem(`events_${this.userId}`, JSON.stringify(this.events)); // Guardar eventos en localStorage con clave única
  }

  loadEvents() {
    const storedEvents = localStorage.getItem(`events_${this.userId}`); // Cargar eventos desde localStorage con clave única
    if (storedEvents) {
      this.events = JSON.parse(storedEvents); // Parsear y asignar los eventos cargados
    }
  }
}
