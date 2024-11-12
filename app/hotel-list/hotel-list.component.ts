// src/app/hotel-list/hotel-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels = [];
  bookedHotel: string | null = null;

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotels = this.hotelService.getHotels();
  }

  bookHotel(hotelName: string): void {
    this.bookedHotel = hotelName;
    alert(`You have booked ${hotelName}!`);
  }
}
