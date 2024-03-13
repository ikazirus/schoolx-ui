import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styles: []
})
export class ChapterComponent implements OnInit {

  public chapter = [];
  constructor( private route:ActivatedRoute, 
    private router:Router,
    private _dataservice: DataserviceService ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this._dataservice.getChapters(id).subscribe(data=>{
    //     this.chapter = data.obj;
    // });

    this.chapter = this._dataservice.getChapters(id);
    
    if(this._dataservice.getBreadCrumbs().id_s!==id){
      this.router.navigate(['/home']);
    }
  }

  onSelect(sel){
    this._dataservice.setChapter(sel.id, sel.name);
    this.router.navigate(['/mod',sel.id]);
  }

  safeUrl(url){
    return this._dataservice.getSafeUrl(url);
  }
}
