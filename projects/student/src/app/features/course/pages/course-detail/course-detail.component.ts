import { Component, OnInit } from '@angular/core';
import { CourseModuleComponent } from './course-module/course-module.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports:[CourseModuleComponent, RouterLink, RouterOutlet],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
