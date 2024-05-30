import { Component } from '@angular/core';
import { AgencyService } from '../../services/agency.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {
  bookings: any;

  constructor(
    // private fb: FormBuilder,
    // private router: Router,
    private snackBar: MatSnackBar,
    private agencyService: AgencyService
    ){

    }
    ngOnInit(){
      this.getPlacedBookings();
    }

    getPlacedBookings(){
      this.agencyService.getPlacedBookings().subscribe(res =>{
        this.bookings = res;
      })
    }

    changeBookStatus(bookId: number, status:string){
      this.agencyService.changeBookStatus(bookId,status).subscribe(res =>{
        if(res.id != null){
          this.snackBar.open("Book Status changed successfully", "Close", { duration: 5000 });
          this.getPlacedBookings();
        }else{
          this.snackBar.open("Something went wrong", "Close", { duration: 5000});
        }
      })
    }
}
