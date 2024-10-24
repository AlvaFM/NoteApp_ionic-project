import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../services/holiday.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  holidays: any[] = []; // Variable para almacenar los feriados

  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
    this.holidayService.getHolidays().subscribe(data => {
      this.holidays = data;
      console.log(this.holidays); // Para verificar que la respuesta esté llegando
    });
  }
}
