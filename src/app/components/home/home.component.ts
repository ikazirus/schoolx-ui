import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute, 
    private router:Router,
    private _dataservice: DataserviceService) {}

  ngOnInit() {
  }

  onSelect(id){
    this.router.navigate(['/sub',id]);
    this._dataservice.setGrade(id, "Grade "+id);
  }

}
