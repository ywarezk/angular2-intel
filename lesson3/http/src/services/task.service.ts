/**
 * Created by yarivkatz on 15/09/2016.
 */

import {Http, URLSearchParams, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export class Task{
    constructor(
        public title : string,
        public description : string,
        public group : string,
        public when : string
    ){}
};

@Injectable()
export class TaskService{
    private _url = 'https://nztodo.herokuapp.com/api/task/';
    private _tasks : Array<Task>;

    private _handleData(res : Response) : Task[]{
        const body = res.json();
        if(body.length === undefined){ //object
            return [
                new Task(
                    body['title'],
                    body['description'],
                    body['group'],
                    body['when']
                )
            ]
        } else { //array
            const tasksArray = [];
            for(let i=0; i<body.length; i++){
                const taskAsObject = body[i];
                tasksArray.push(
                    new Task(
                        taskAsObject['title'],
                        taskAsObject['description'],
                        taskAsObject['group'],
                        taskAsObject['when']
                    )
                );
            }
            return tasksArray;
        }
    }

    constructor(private _http : Http){
    }

    addTask(task : Task){
        this._tasks.push(task);
    }

    getTasks() : Observable<Task[]>{
        let params : URLSearchParams = new URLSearchParams();
        params.set('format', 'json');
        return this._http.get(this._url, {search: params})
            .map(this._handleData);
    }

    getTasksAsPromise() : Promise<Task[]>{
        let params : URLSearchParams = new URLSearchParams();
        params.set('format', 'json');
        return this._http.get(this._url, {search: params})
            .toPromise()
            .then(this._handleData);
    }

}