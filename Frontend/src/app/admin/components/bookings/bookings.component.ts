import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../service/admin.service';

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
    private adminService: AdminService
    ){

    }
    ngOnInit(){
      this.getPlacedBookings();
    }

    getPlacedBookings(){
      this.adminService.getPlacedBookings().subscribe(res =>{
        this.bookings = res;
      })
    }

    changeBookStatus(bookId: number, status:string){
      this.adminService.changeBookStatus(bookId,status).subscribe(res =>{
        if(res.id != null){
          this.snackBar.open("Book Status changed successfully", "Close", { duration: 5000 });
          this.getPlacedBookings();
        }else{
          this.snackBar.open("Something went wrong", "Close", { duration: 5000});
        }
      })
    }
}
