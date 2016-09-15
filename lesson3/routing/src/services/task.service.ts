/**
 * Created by yarivkatz on 15/09/2016.
 */


export class Task{
    constructor(
        public title : string,
        public description : string,
        public group : string,
        public when : string
    ){}
};

export class TaskService{
    private _tasks : Array<Task>;
    constructor(){
        this._tasks = [
            new Task('t1', 't1', 't1', 't1'),
            new Task('t2', 't2', 't2', 't2'),
            new Task('t3', 't3', 't3', 't3'),
            new Task('t4', 't4', 't4', 't4')
        ];
    }

    addTask(task : Task){
        this._tasks.push(task);
    }

    getTasks() : Array<Task>{
        return this._tasks;
    }

}