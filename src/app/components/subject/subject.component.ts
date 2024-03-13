import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styles: []
})
export class SubjectComponent implements OnInit {
  public subjects = [ ];

  constructor(private route:ActivatedRoute, 
    private router:Router,
    private _dataservice: DataserviceService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this._dataservice.getSubjects(id).subscribe(data=>{
    //     this.subjects = data.obj;
    // });

    this.subjects = this._dataservice.getSubjects(id);

    if(this._dataservice.getBreadCrumbs().id_g!==id){
      this.router.navigate(['/home']);
    }
  }

  onSelect(sel){
    this.router.navigate(['/chap',sel.id]);
    this._dataservice.setSubject(sel.id, sel.name);
  }


  safeUrl(url){
    return this._dataservice.getSafeUrl(url);
  }
}
