import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  shequs;
  ngOnInit() {
    this.http.get('/api/shequs').subscribe(data=>{
      this.shequs = data;
    })
    this.router.params.subscribe((params)=>{
      this.courseId = params['courseId'];
    });
  }

  go(){
    //js跳转
    this.route.navigate(['/shequ',600],{queryParams:{id:1000}});
  }
}
export class Shequ{
  constructor(
      public id:number,
      public courseName:string,
      public images:string, 
      public person:number
  ){}
}