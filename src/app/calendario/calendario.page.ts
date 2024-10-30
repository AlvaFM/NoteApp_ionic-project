import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: 'calendario.page.html',
  styleUrls: ['calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  selectedDate: string = new Date().toISOString().split('T')[0]; 
  event: string = ''; 
  events: { date: string; event: string }[] = []; 
  userId: string = ''; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId']; 
      this.loadEvents(); 
    });
  }

  selectDate(event: any) {
    this.selectedDate = event.target.value;
  }

  addEvent() {
    if (this.event) {
      const newEvent = { date: this.selectedDate, event: this.event };
      this.events.push(newEvent);
      this.saveEvents(); 
      this.event = ''; 
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
}
  