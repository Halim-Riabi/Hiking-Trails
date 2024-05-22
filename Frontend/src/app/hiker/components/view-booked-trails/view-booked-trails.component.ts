import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HikerService } from '../../services/hiker.service';

@Component({
  selector: 'app-view-booked-trails',
  templateUrl: './view-booked-trails.component.html',
  styleUrls: ['./view-booked-trails.component.scss']
})
export class ViewBookedTrailsComponent {

  bookId: any = this.activatedroute.snapshot.params['bookId'];
  bookedTrailDetailsList = [];
  totalAmount: any;

  constructor(
    private hikerService: HikerService,
    // private snackbar: MatSnackBar,
    // private fb: FormBuilder,
    // private router: Router,
    // public dialog: MatDialog
    private activatedroute: ActivatedRoute,
  ){}

  ngOnInit(){
    this.getBookedTrailsDetailsByBookId();
  }

  getBookedTrailsDetailsByBookId(){
    this.hikerService.getBookedTrails(this.bookId).subscribe(res=>{
      res.trailDtoList.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.bookedTrailDetailsList.push(element);
      });
      this.totalAmount = res.bookAmount;
    })
  }


}
