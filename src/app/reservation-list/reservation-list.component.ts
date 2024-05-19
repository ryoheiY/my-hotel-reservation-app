import { Component } from '@angular/core';
import { Reservation } from '../models/reservation';
import { OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit  {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService){
  }

  ngOnInit(): void {
    this.reservations = this.reservationService.getResevations();
  }

  deleteReservation(id : string){
    this.reservationService.deleteReservation(id);
  }


}
