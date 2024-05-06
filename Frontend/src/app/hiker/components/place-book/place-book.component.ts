import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HikerService } from '../../services/hiker.service';

@Component({
  selector: 'app-place-book',
  templateUrl: './place-book.component.html',
  styleUrls: ['./place-book.component.scss']
})
export class PlaceBookComponent {

  bookForm!: FormGroup;

  constructor(
    private hikerService: HikerService,
    private snackbar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ){}

  ngOnInit(){
    this.bookForm = this.fb.group({
      address: [null ,[Validators.required]],
      bookDescription: [null],
    })
  }

  placeBook(){
    this.hikerService.placeBook(this.bookForm.value).subscribe(res => {
      if (res.id != null) {
        this.snackbar.open("Your book is placed successfully", "Close", { duration: 5000})
        this.router.navigateByUrl("/hiker/my-bookings");
        this.closeForm();
      }else {
        this.snackbar.open("Something went wrong", "Close", { duration: 5000})
      }
    })
  }

  closeForm(){
    this.dialog.closeAll();
  }

}
