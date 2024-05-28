import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { HikerService } from '../../services/hiker.service';

@Component({
  selector: 'app-view-trail-detail',
  templateUrl: './view-trail-detail.component.html',
  styleUrls: ['./view-trail-detail.component.scss']
})
export class ViewTrailDetailComponent {

  trailId: number = this.activatedroute.snapshot.params["trailId"];

  trail: any;
  reviews: any[] = [];

  
  constructor(
    private hikerService: HikerService,
    private snackbar: MatSnackBar,
    // private fb: FormBuilder,
    // private router: Router,
    // public dialog: MatDialog
    private activatedroute: ActivatedRoute,
  ){}

  ngOnInit(){
    this.getTrailDetailById();
  }

  getTrailDetailById(){
    this.hikerService.getTrailDetailById(this.trailId).subscribe(res => {
      this.trail = res.trailDto;
      this.trail.processedImg = 'data:image/png;base64,' + res.trailDto.byteImg;

      res.reviewDtoList.forEach(element => {
        element.processedImg = 'data:image/png;base64,' + element.returnedImg;
        this.reviews.push(element);
      });
    })
  }

}
