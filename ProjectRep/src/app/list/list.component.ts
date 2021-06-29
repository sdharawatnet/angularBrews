import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: any;

  constructor(public _http: HttpService) { }

  ngOnInit() {

      this._http.getBeer().subscribe(result=>{
        this.brews = result;
        console.log(this.brews)
      });

  }

}
