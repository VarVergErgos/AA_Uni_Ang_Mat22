import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path: '',component: HomeComponent,},
  {path: 'home',component: HomeComponent,},
  {path: 'courses',component: CoursesComponent,},
  {path: 'about',component: AboutComponent,},
  {path: '**',redirectTo: '/',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
