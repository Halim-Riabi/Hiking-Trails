import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-post-trail',
  templateUrl: './post-trail.component.html',
  styleUrls: ['./post-trail.component.scss']
})
export class PostTrailComponent {

  trailForm: FormGroup;
  listOfCategories: any = [];
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService
    ){}

    onFileSelected(event: any){
      this.selectedFile = event.target.files[0];
      this.previewImage();
    }

    previewImage(){
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      }
      reader.readAsDataURL(this.selectedFile);
    }

    ngOnInit(): void{
      this.trailForm = this.fb.group({
        categoryId: [null, [Validators.required]],
        name: [null, [Validators.required]],
        price: [null, [Validators.required]],
        description: [null, [Validators.required]],
      });

      this.getAllCategories();
      
    }

    getAllCategories(){
      this.adminService.getAllCategories().subscribe(res=>{
        this.listOfCategories = res;
      })
    }

    addTrail(): void {
      if(this.trailForm.valid){
        const formData: FormData = new FormData();
        formData.append('img', this.selectedFile);
        formData.append('categoryId', this.trailForm.get('categoryId').value);
        formData.append('name', this.trailForm.get('name').value);
        formData.append('description', this.trailForm.get('description').value);
        formData.append('price', this.trailForm.get('price').value);

        this.adminService.addTrail(formData).subscribe((res) =>{
          if (res.id != null){
            this.snackBar.open('Trail Posted Successfully!', 'Close', {
              duration: 5000
            });
            this.router.navigateByUrl('/admin/dashboard');
          }else {
            this.snackBar.open(res.message, 'ERROR', {
              duration: 5000
            });
          }
        })
      }else{
        for(const i in this.trailForm.controls){
          this.trailForm.controls[i].markAsDirty();
          this.trailForm.controls[i].updateValueAndValidity();
        }
      }
    }

}
