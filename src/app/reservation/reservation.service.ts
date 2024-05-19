import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor() {
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations? JSON.parse(savedReservations) : [];
  }

  getResevations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((reservation) => id === reservation.id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    this.setLocalStrage();
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations.splice(index, 1);
    this.setLocalStrage();
  }

  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex((res) => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
    this.setLocalStrage();
  }

  private setLocalStrage(){
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
}
