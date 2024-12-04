import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: 'calendario.page.html',
  styleUrls: ['calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  selectedDate: string = new Date().toISOString().split('T')[0]; 
  event: string = ''; 
  events: { idEvento: number, date: string, event: string }[] = []; 
  userId: string = '';
  
  VerEventos: string = 'desactivado';

  constructor(private route: ActivatedRoute, private toastController:ToastController ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId']; 
      this.loadEvents(); 
    });
  }

  selectDate(event: any) {
    this.selectedDate = event.target.value;
  }

  async addEvent() {
    if (this.event !== '') {
      const newEvent = { 
        idEvento: Date.now() + Math.floor(Math.random() * 100000),
        date: this.selectedDate,
        event: this.event 
      };
  
      this.events.push(newEvent);
      this.saveEvents(); 
      this.event = '';

      const toast = await this.toastController.create({
        message: `Evento agregado para el día ${this.selectedDate}`,
        duration: 2000,
        position: 'top',
        color: 'success', 
      });

      await toast.present(); 
    } else {
      console.log('No se pueden agregar eventos vacíos');

      const toast = await this.toastController.create({
        message: 'No se puede agregar un evento vacío.',
        duration: 2000,
        position: 'top',
        color: 'danger', 
      });

      await toast.present(); 
    }
  }
  

  

  saveEvents() {
    localStorage.setItem(`events_${this.userId}`, JSON.stringify(this.events)); 
  }

  loadEvents() {
    const storedEvents = localStorage.getItem(`events_${this.userId}`); 
    if (storedEvents) {
      this.events = JSON.parse(storedEvents); 
    }
  }

  deleteEvents(date: string, idEvento: number) {
    this.events = this.events.filter(event => event.idEvento !== idEvento || event.date !== date);
    this.saveEvents();
    this.loadEvents();
  }
  
}
  