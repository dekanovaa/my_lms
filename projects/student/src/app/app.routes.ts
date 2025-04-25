import { Routes } from '@angular/router';
import { CoursesListComponent } from './features/course/pages/courses-list/courses-list.component';
import { CourseDetailComponent } from './features/course/pages/course-detail/course-detail.component';
import { MainComponent } from './features/main/main.component';
import { LayoutComponent } from './core/layout/layout.component';
import { CourseIdComponent } from './features/course/pages/course-detail/course-id/course-id.component';
import { CourseDetailMainComponent } from './features/course/pages/course-detail/course-detail-main/course-detail-main.component';
import { SignInComponent } from './features/course/pages/course-detail/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: 'courses-list',
    component: CoursesListComponent,
  },
  {
    path: 'course-detail',
    component: CourseDetailComponent,
    children: [
      {
        path:'',
        component: CourseDetailMainComponent
      },
      {
        path: 'course-angular',
        component: CourseIdComponent,
      },
      {
        path: 'sign-in',
        component: SignInComponent,
      }
    ]
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'layout',
    component: LayoutComponent,
  },
];
