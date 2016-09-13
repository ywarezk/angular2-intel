/**
 * Single task component
 */

import {Component, Input} from '@angular/core';
import {Task} from '../services/task.service.ts';

@Component({
    selector: 'single-task',
    template:
    `
    <div>
        <h3>
            <strong>Title:</strong> {{task.title}}
        </h3>
        <p>
            <strong>Description: </strong> {{task.description}}
        </p>
    </div>
    `
})
export class SingleTaskComponent{
    @Input() task : Task;

}