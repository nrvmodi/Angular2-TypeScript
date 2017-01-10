import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService{


    constructor(){
        console.log('CoursesService initialized....');

    }

    getCourses(){

        return [{name:'Angular 2',id:'1',prize:'300',ratting:'5'}];

    }

}