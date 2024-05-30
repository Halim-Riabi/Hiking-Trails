// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/admin/service/admin.service';
import { HikerService } from '../../services/hiker.service';
import { Router } from '@angular/router';
// import { MapDialogComponent } from 'src/app/admin/components/map-dialog/map-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HikerMapDialogComponent } from '../hiker-map-dialog/hiker-map-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  trails: any[] = [];
  searchTrailForm!: FormGroup;
  page = 1; // current page number
  itemsPerPage = 6; // number of items per page
  totalItems = 0; // total number of items

  constructor(private hikerService: HikerService,
              private fb: FormBuilder,
              private router: Router,
              private snackbar: MatSnackBar,
              private dialog: MatDialog) {}

  ngOnInit(){
    this.getAllTrails();
    this.searchTrailForm = this.fb.group({
      title:[null, [Validators.required]]
    })
  }

  getAllTrails(){
    this.trails = [];
    this.hikerService.getAllTrails().subscribe(res => {
      this.totalItems = res.length; // update total items count
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
    this.hikerService.getAllTrailsByName(title).subscribe(res => {
      this.totalItems = res.length; // update total items count
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.trails.push(element);
      });
      console.log(this.trails)
    })
  }

  addToDemand(id: any){
    this.hikerService.addToDemand(id).subscribe(res => {
      this.snackbar.open("Your Trail added to your demand list successfully", "Close", { duration: 5000 })
      this.router.navigateByUrl("/hiker/demand");
    })
  }

  onPageChange(page: number) {
    this.page = page;
    this.getAllTrails(); // or implement a similar method to fetch paginated data
  }

  
  openHikerMapDialog(startLat: number, startLng: number, endLat: number, endLng: number): void {
    const dialogRef = this.dialog.open(HikerMapDialogComponent, {
      width: '600px',
      height: '450px',
      data: { startLat, startLng, endLat, endLng }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
