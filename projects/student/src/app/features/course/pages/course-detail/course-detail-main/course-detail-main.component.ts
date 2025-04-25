import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseModuleComponent } from '../course-module/course-module.component';

@Component({
  selector: 'app-course-detail-main',
  standalone: true,
  imports: [RouterLink, CourseModuleComponent],
  templateUrl: './course-detail-main.component.html',
  styleUrl: './course-detail-main.component.scss'
})
export class CourseDetailMainComponent {

}
