import { Component, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VisitorService } from '../../services/visitor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  trails: any[] = [];
  searchTrailForm!: FormGroup;

  constructor(private visitorService: VisitorService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private renderer: Renderer2,
    private el: ElementRef){}

  ngOnInit(){
    this.getAllTrails();
    this.searchTrailForm = this.fb.group({
      title:[null, [Validators.required]]
    })
  }

  getAllTrails(){
    this.trails = [];
    this.visitorService.getAllTrails().subscribe(res =>{
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
    this.visitorService.getAllTrailsByName(title).subscribe(res =>{
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.trails.push(element);
      });
      console.log(this.trails)
    })
  }
  addToMyList(id:any){
    
  }
  displayMessage(){
    this.snackbar.open('You are still a visitor. Please authenticate to continue.', 'Close', {
      duration: 7000, horizontalPosition: 'center',
      verticalPosition: 'bottom'
  });
  }

 

}
