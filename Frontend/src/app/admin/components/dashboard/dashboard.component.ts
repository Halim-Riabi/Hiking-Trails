import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MapDialogComponent } from '../map-dialog/map-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  trails: any[] = [];
  searchTrailForm!: FormGroup;

  constructor(private adminService: AdminService,
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
    this.adminService.getAllTrails().subscribe(res =>{
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
    this.adminService.getAllTrailsByName(title).subscribe(res =>{
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.trails.push(element);
      });
      console.log(this.trails)
    })
  }

  // deleteTrail(trailId:any){
  //   this.adminService.deleteTrail(trailId).subscribe(res=>{
  //     if(res.body == null){
  //       this.snackbar.open('Trail Deleted Successfully', 'Close', {
  //         duration: 5000
  //       });
  //       this.getAllTrails();
  //     }else{
  //       this.snackbar.open(res.message, 'Close', {
  //         duration: 5000,
  //         panelClass: 'error-snackbar'
  //       });
  //     }
  //   })
  // }

  // deleteTrail(trailId: any) {
  //   this.adminService.deleteTrail(trailId).subscribe(
  //     res => {
  //       if (res.body == null) {
  //         this.snackbar.open('Trail Deleted Successfully', 'Close', {
  //           duration: 5000
  //         });
  //         this.getAllTrails();
  //       } else {
  //         this.snackbar.open(res.message || 'An error occurred', 'Close', {
  //           duration: 5000,
  //           panelClass: 'error-snackbar'
  //         });
  //       }
  //     },
  //     error => {
  //       console.error('Error deleting trail:', error);
  //       this.snackbar.open('An error occurred', 'Close', {
  //         duration: 5000,
  //         panelClass: 'error-snackbar'
  //       });
  //     }
  //   );
  // }

  // deleteTrail(trailId: any) {
  //   this.adminService.deleteTrail(trailId).subscribe(
  //     res => {
  //       if (res && res.body == null) {
  //         this.snackbar.open('Trail Deleted Successfully', 'Close', {
  //           duration: 5000
  //         });
  //         this.getAllTrails();
  //       } else if (res) {
  //         this.snackbar.open(res.message || 'An error occurred', 'Close', {
  //           duration: 5000,
  //           panelClass: 'error-snackbar'
  //         });
  //       } else {
  //         this.snackbar.open('An error occurred', 'Close', {
  //           duration: 5000,
  //           panelClass: 'error-snackbar'
  //         });
  //       }
  //     },
  //     error => {
  //       console.error('Error deleting trail:', error);
  //       this.snackbar.open('An error occurred', 'Close', {
  //         duration: 5000,
  //         panelClass: 'error-snackbar'
  //       });
  //     }
  //   );
  // }

  // deleteTrail(trailId: any) {
  //   this.adminService.deleteTrail(trailId).subscribe(
  //     () => {
  //       this.snackbar.open('Trail Deleted Successfully', 'Close', {
  //         duration: 5000
  //       });
  //       this.getAllTrails();
  //     },
  //     error => {
  //       console.error('Error deleting trail:', error);
  //       this.snackbar.open('An error occurred', 'Close', {
  //         duration: 5000,
  //         panelClass: 'error-snackbar'
  //       });
  //     }
  //   );
  // }

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
    this.adminService.deleteTrail(trailId).subscribe(
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
  

  openMapDialog(): void {
    const dialogRef = this.dialog.open(MapDialogComponent, {
      width: '600px',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

}
}
