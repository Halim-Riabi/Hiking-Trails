import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteConfirmationDialogComponent } from 'src/app/admin/components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { AgencyService } from '../../services/agency.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  trails: any[] = [];
  searchTrailForm!: FormGroup;

  constructor(private agencyService: AgencyService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private dialog: MatDialog){}

  ngOnInit(){
    this.getAllTrails();
    this.searchTrailForm = this.fb.group({
      title:[null, [Validators.required]]
    })
  }

  getAllTrails(){
    this.trails = [];
    this.agencyService.getAllTrails().subscribe(res =>{
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.trails.push(element);
      });
      console.log(this.trails)
    })
  }

  submitForm(){
    this.trails = [];
    const title = this.searchTrailForm.get('title')!.value;
    this.agencyService.getAllTrailsByName(title).subscribe(res =>{
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.trails.push(element);
      });
      console.log(this.trails)
    })
  }



  deleteTrail(trailId: any) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: { trailId }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.performDelete(trailId);
      }
    });
  }
  
  performDelete(trailId: any) {
    this.agencyService.deleteTrail(trailId).subscribe(
      () => {
        this.snackbar.open('Trail Deleted Successfully', 'Close', {
          duration: 5000
        });
        this.getAllTrails();
      },
      error => {
        console.error('Error deleting trail:', error);
        this.snackbar.open('An error occurred', 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    );
  }


}
