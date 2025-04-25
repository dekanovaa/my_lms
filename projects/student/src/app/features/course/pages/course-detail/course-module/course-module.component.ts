import { transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-module',
  standalone: true,
  imports: [],
  templateUrl: './course-module.component.html',
  styleUrl: './course-module.component.scss',
})
export class CourseModuleComponent {
  Module = false;
  openModule() {
    this.Module = !this.Module;
    console.log("funksiya ishladi");
    
  }
}
