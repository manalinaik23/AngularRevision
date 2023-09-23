import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';
import { course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input()
  course: course|undefined;

  @Output('courseClicked')
  courseSelected =  new EventEmitter<course>();

  @ContentChild(CourseImageComponent)
  image!:CourseImageComponent;

  @ContentChildren(CourseImageComponent)
  images!:QueryList<CourseImageComponent>;
  constructor(){
    
  }
  ngAfterContentInit(){
   
  }
  courseClicked(){
    this.courseSelected.emit(this.course);
    console.log("content Child");
    console.log(this.image);

    console.log("content Children");
    console.log(this.images);
  }
}
