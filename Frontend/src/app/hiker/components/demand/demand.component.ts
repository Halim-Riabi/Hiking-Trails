import { Component } from '@angular/core';
import { HikerService } from '../../services/hiker.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PlaceBookComponent } from '../place-book/place-book.component';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.scss']
})
export class DemandComponent {

  demandList: any[] = [];
  book: any;

  constructor(private hikerService: HikerService,
    private snackbar: MatSnackBar,
    private fb: FormBuilder,
    private dialog: MatDialog,){}


    ngOnInit(): void {
      this.getDemand();
    }

    getDemand(){
      this.demandList = [];
      this.hikerService.getDemandByUserId().subscribe(res =>{
        this.book = res;
        res.demandList.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
          this.demandList.push(element);
        });
      })
    }

    increaseNbparticipants(trailId: any){
      this.hikerService.increaseTrailNbparticipants(trailId).subscribe(res =>{
        this.snackbar.open('Number of participants increased!', 'Close', {duration: 5000});
        // now we need to update the page so we can call the getDemand method and we can update the details of the demand
        this.getDemand();
      })
    }

    decreaseNbparticipants(trailId: any){
      this.hikerService.decreaseTrailNbparticipants(trailId).subscribe(res =>{
        this.snackbar.open('Number of participants decreased!', 'Close', {duration: 5000});
        // now we need to update the page so we can call the getDemand method and we can update the details of the demand
        this.getDemand();
      })
    }

    placeBook(){
      this.dialog.open(PlaceBookComponent);
    }

}
