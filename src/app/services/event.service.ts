import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: { [key: string]: string[] } = {};

  constructor(private storage: Storage) {
    this.loadEvents();
  }

  // Cargar eventos desde el almacenamiento local
  async loadEvents() {
    const storedEvents = await this.storage.get('events');
    this.events = storedEvents || {};
  }

  // Guardar un evento en la fecha seleccionada
  async saveEvent(date: string, event: string) {
    if (!this.events[date]) {
      this.events[date] = [];
    }
    this.events[date].push(event);
    await this.storage.set('events', this.events);
  }

  // Obtener eventos para una fecha específica
  getEvents(date: string): string[] {
    return this.events[date] || [];
  }

  // Obtener todas las fechas con eventos
  getAllDates(): string[] {
    return Object.keys(this.events);
  }
}
