/**
 * Root component
 */

import {Component} from '@angular/core';
import {TaskService, Task} from './services/task.service.ts';

@Component({
    selector: 'app',
    template: require('./app.template.html'),
    styles: [
        require('bootstrap/dist/css/bootstrap.css'),
        `
        .active{
            background-color: red;
        }
        `
    ]
})
export class AppComponent{
    username : string = '';

    title : string;
    description : string;
    group : string;
    when : string;
    tasks : Array<Task>;

    constructor(private _taskService : TaskService){
        this.tasks = _taskService.getTasks();
    }

    submmittingForm(){
        alert(this.username);
    }

    createTask(){
        const task = new Task(
            this.title,
            this.description,
            this.group,
            this.when
        );
        this._taskService.addTask(task);
    }
}
