import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styles: []
})
export class ModuleComponent implements OnInit {

  public module = [];
  constructor( private route:ActivatedRoute, 
    private router:Router,
    private _dataservice: DataserviceService ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this._dataservice.getModules(id).subscribe(data=>{
    //   this.module = data.obj;
    // });

    this.module = this._dataservice.getModules(id);

    if(this._dataservice.getBreadCrumbs().id_c!==id){
      this.router.navigate(['/home']);
    }
  }

  onSelect(sel){
    this.router.navigate(['/modv',sel.id]);
    this._dataservice.setModule(sel.id, sel.name);
  }

  safeUrl(url){
    return this._dataservice.getSafeUrl(url);
  }
}
