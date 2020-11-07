import {NgModule} from '@angular/core';
import {CourseListComponent} from './course-list.component';
import {CourseInfoComponent} from './course-info.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {StarModule} from '../shared/component/star/star.module';
import {ReplacePipe} from '../shared/pipe/replace.pipe';
import {AppPipeModule} from '../shared/pipe/app-pipe.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule {

}


/** A responsabilidade do curso foi segregada com a criação do módulo CourseMódule
 * neste módulo coloquei tods os elements inerentes ao curso
 * como  CourseListComponent , CourseInfoComponent, ReplacePipe, StarComponent
 *
 * Importei o FormsModule, pois era necessário no fomulário
 */
