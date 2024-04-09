import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  trails: any[] = [];
  searchTrailForm!: FormGroup;

  constructor(private adminService: AdminService,
    private fb: FormBuilder){}

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
    })
  }

}
