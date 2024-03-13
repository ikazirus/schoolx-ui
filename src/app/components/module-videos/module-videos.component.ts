import { Component, OnInit, Inject, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataserviceService } from 'src/app/service/dataservice.service';
import {  ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

export interface DialogData {
 id:number;
 name:string;
 video:string;
 tutor:string;
 cun: number;
 und:number;
 con:number;
 dun:number;
}

@Component({
  selector: 'app-module-videos',
  templateUrl: './module-videos.component.html',
  styles: []
})
export class ModuleVideosComponent implements OnInit {
  public modulevideo = [];

  constructor(public dialog: MatDialog,
    private router:Router,
    private route: ActivatedRoute, 
    private _dataservice: DataserviceService,
    public appc : AppComponent) { 
    
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this._dataservice.getModuleVideos(id).subscribe(data=>{
    //   this.modulevideo = data.obj;
    // });

    this.modulevideo = this._dataservice.getModuleVideos(id);
    
    if(this._dataservice.getBreadCrumbs().id_m!==id){
      this.router.navigate(['/home']);
    }
  }

  openDialog(sel): void {
    
    const dialogRef = this.dialog.open(VideoPlayback, {
      disableClose: true,
      minWidth:'60%',
      minHeight: '40%',
      maxWidth:'90%',
      maxHeight: '90%',
      data: sel
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}



@Component({
  selector: 'video-playback',
  templateUrl: 'video-dialog.html',
})
export class VideoPlayback implements OnInit{

  isRated: boolean;
  rating: number;

  public videoSrc;
  modulevideo:DialogData ;

  constructor(
    public dialogRef: MatDialogRef<VideoPlayback>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _dataservice: DataserviceService) {}

  ngOnInit() {
    this.isRated = false;
    this.modulevideo = this.data;
    this.videoSrc = this._dataservice.getSafeUrl('https://www.youtube.com/embed/'+this.data.video);
  }


 


  onRatingChanged(rating){
    // console.log(rating);
    this.isRated = true;
    this._dataservice.setRating(this.modulevideo.id,rating);
  }

}
