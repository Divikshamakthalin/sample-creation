// src/app/hotel.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotels = [
    { id: 1, name: 'Hotel Sunshine', location: 'New York', price: 200 },
    { id: 2, name: 'Ocean Breeze', location: 'Miami', price: 150 },
    { id: 3, name: 'Mountain Escape', location: 'Denver', price: 180 }
  ];

  getHotels() {
    return this.hotels;
  }
}
