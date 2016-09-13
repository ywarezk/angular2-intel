/**
 * task service
 */

export class Task{
    constructor(public title : string, public description : string, public group : string, public when : string){

    }
}

export class TaskService{
    getTasks() : Array<Task>{
        return [
            new Task('t1', 't1', 'g1', 'asdf'),
            new Task('t2', 't2', 'g1', 'asdf'),
            new Task('t3', 't3', 'g1', 'asdf'),
            new Task('t4', 't4', 'g2', 'asdf'),
            new Task('t5', 't5', 'g2', 'asdf'),
            new Task('t6', 't6', 'g2', 'asdf'),
        ];
    }
}
