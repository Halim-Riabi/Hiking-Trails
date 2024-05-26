import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { HikerService } from '../../services/hiker.service';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';

@Component({
  selector: 'app-review-booked-trail',
  templateUrl: './review-booked-trail.component.html',
  styleUrls: ['./review-booked-trail.component.scss']
})
export class ReviewBookedTrailComponent {
  trailId: number = this.activatedroute.snapshot.params["trailId"];
  reviewForm!: FormGroup;
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;

  constructor(
    private hikerService: HikerService,
    private snackbar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router,
    // public dialog: MatDialog
    private activatedroute: ActivatedRoute,
  ){}

  ngOnInit(){
    this.reviewForm = this.fb.group({
      rating: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage(){
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  submitForm(){
    const formData: FormData = new FormData();
    formData.append('img', this.selectedFile)
    formData.append('trailId', this.trailId.toString());
    formData.append('userId', UserStorageService.getUserId().toString());
    formData.append('rating', this.reviewForm.get('rating').value);
    formData.append('description', this.reviewForm.get('description').value);

    this.hikerService.giveReview(formData).subscribe(res =>{
      if(res.id != null){
        this.snackbar.open('Review Posted Successfully!', 'Close', {
          duration: 5000
        });
        this.router.navigateByUrl('/hiker/my_bookings');
      }else{
        this.snackbar.open("Something went wrong", 'ERROR', {
          duration: 5000
        });
      }
    })

  }

}
