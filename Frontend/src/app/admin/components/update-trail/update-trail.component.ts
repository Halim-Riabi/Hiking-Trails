import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-update-trail',
  templateUrl: './update-trail.component.html',
  styleUrls: ['./update-trail.component.scss']
})
export class UpdateTrailComponent {

  trailId = this.activatedroute.snapshot.params['trailId'];

  trailForm: FormGroup;
  listOfCategories: any = [];
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;

  existingImage: string | null = null;
  imgChanged = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService,
    private activatedroute: ActivatedRoute,
    ){}

    onFileSelected(event: any){
      this.selectedFile = event.target.files[0];
      this.previewImage();
      this.imgChanged = true;

      this.existingImage = null;
    }
    // adjusting the size of the image preview should be done
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
        slatitude: [null, [Validators.required]],
        slongitude: [null, [Validators.required]],
        elatitude: [null, [Validators.required]],
        elongitude: [null, [Validators.required]],
      });

      this.getAllCategories();
      this.getTrailById();
    }

    getAllCategories(){
      this.adminService.getAllCategories().subscribe(res=>{
        this.listOfCategories = res;
      })
    }

    getTrailById(){
      this.adminService.getTrailById(this.trailId).subscribe(res=>{
        this.trailForm.patchValue(res);
        this.existingImage = 'data:image/jpeg;base64,' + res.byteImg;
      })
    }

    updateTrail(): void {
      if(this.trailForm.valid){
        const formData: FormData = new FormData();
        if(this.imgChanged && this.selectedFile){
          formData.append('img', this.selectedFile);
        }
        
        formData.append('categoryId', this.trailForm.get('categoryId').value);
        formData.append('name', this.trailForm.get('name').value);
        formData.append('description', this.trailForm.get('description').value);
        formData.append('price', this.trailForm.get('price').value);
        formData.append('slatitude', this.trailForm.get('slatitude').value);
        formData.append('slongitude', this.trailForm.get('slongitude').value);
        formData.append('elatitude', this.trailForm.get('elatitude').value);
        formData.append('elongitude', this.trailForm.get('elongitude').value);

        this.adminService.updateTrail(this.trailId,formData).subscribe((res) =>{
          if (res.id != null){
            this.snackBar.open('Trail Updated Successfully!', 'Close', {
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
