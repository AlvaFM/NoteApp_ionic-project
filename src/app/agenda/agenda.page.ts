import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage {
  eventName: string = '';
  eventDate: string = '';
  events: { name: string; date: string }[] = [];

  constructor() {}

  onSubmit() {
    if (this.eventName && this.eventDate) {
      this.events.push({ name: this.eventName, date: this.eventDate });
      this.eventName = '';
      this.eventDate = '';
    }
  }
}
