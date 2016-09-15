/**
 * Root component
 */

import {Component, OnInit} from '@angular/core';
import {TaskService, Task} from './services/task.service.ts';

@Component({
    selector: 'app',
    template: require('./app.template.html'),
    styles: [
        require('bootstrap/dist/css/bootstrap.css'),

    ]
})
export class AppComponent implements OnInit{
    tasks : Task[];
    tasks2 : Task[];

    constructor(private _taskService : TaskService){}

    /**
     * initiates the tasks array from the server
     */
    ngOnInit(){
        // calling observable
        this._taskService.getTasks()
            .subscribe((tasks : Task[]) => {
                this.tasks = tasks;
            }, (error) => {
                console.error(JSON.stringify(error));
            });

        //calling wiht promise
        this._taskService.getTasksAsPromise().then(
            (tasks : Task[]) => {
                this.tasks2 = tasks;
            }
        );
    }
}
