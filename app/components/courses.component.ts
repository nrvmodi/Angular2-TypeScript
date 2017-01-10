
import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';
/**
 * CoursesComponent
 */
@Component({
    moduleId:module.id,
    selector:'courses',
    templateUrl:'courses.component.html',
    providers:[CoursesService]
})
export class CoursesComponent {

    courses:Course[];

    constructor(private courseService:CoursesService) {
        console.log('CoursesComponent initialized....');

        this.courses = courseService.getCourses();
    }
}