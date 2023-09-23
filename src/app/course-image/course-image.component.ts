import { Component, Input } from '@angular/core';
import { course } from '../model/course';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css']
})
export class CourseImageComponent {

  @Input()
  course?:course;

  
}
