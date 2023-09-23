import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from 'src/db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRevision';
  Courses = COURSES;
  color="Pink";
  rate=0.5;
  currency=100;
  item=77.77;
  startDate=new Date(2023,2,10);
  constructor() {
    
  }
  
  @ViewChild(CourseCardComponent)
  card: CourseCardComponent = new CourseCardComponent;

  @ViewChildren(CourseCardComponent)
  courseData!:QueryList<CourseCardComponent>;

  courseSelected(item:course){
    // console.log("eventEmitter");
    // console.log(item);

    //console.log("View Child");
    //console.log(this.card);

    //this.courseData.forEach(i=>console.log(i));
    //console.log(this.courseData.last);
  }

}
