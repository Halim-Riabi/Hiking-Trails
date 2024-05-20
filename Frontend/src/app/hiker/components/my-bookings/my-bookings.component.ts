import { Component } from '@angular/core';
import { HikerService } from '../../services/hiker.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent {

  myBookings: any;

  constructor(private hikerService: HikerService){}

  ngOnInit(){
    this.getMyBookings();
  }

  getMyBookings(){
    this.hikerService.getBookingsByUserId().subscribe(res =>{
      this.myBookings = res;
    })
  }

}
