import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { TodolistComponent } from './components/todolist/todolist.component';
import { ParentComponent } from './components/parent/parent.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { CommonService } from './services/common.service';
import { RouterModule,Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { HttpClientModule } from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { ShequdetailComponent } from './components/shequdetail/shequdetail.component';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentComponent,
    InputComponent,
    ListComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbudetailComponent,
    HomepageComponent,
    CoursedetailComponent,
    ShequdetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'homepage',component:HomepageComponent},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'course',component:CourseComponent},
      {path:'course/:courseId',component:CoursedetailComponent},
      {path:'shequ',component:ShequComponent},
      {path:'shequ/:courseId',component:ShequdetailComponent},
      {path:'',redirectTo:'homepage',pathMatch:'full'},
      {path:'**',component:ShequComponent},
    ]),
    HttpClientModule
  ],
  providers: [{provide:CommonService,useClass:CommonService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
