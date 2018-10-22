import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  acourses;
  ngOnInit() {
    this.http.get('api/acourses').subscribe(data=>{
      this.acourses = data;
    })

  //参数订阅
  this.router.params.subscribe((params)=>{
    this.courseId = params['courseId'];
  });
}
  go(){
    //js跳转
    this.route.navigate(['/course',600],{queryParams:{id:1000}});
  }

}
export class Acourse{
  constructor(
    public id:number,
    public classTime:number,
    public className:string,
    public person:number,
    public images:string
  ){}
}