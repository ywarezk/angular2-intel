/**
 * Greeting component
 */

import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'greeting',
    template: require('./greeting.template.html')
})
export class GreetingComponent{
    @Input() message : string;
    @Output() deleteGreeting = new EventEmitter<any>();

    deleteFromGreeting(event){
        console.log('delete from greeting');
        this.deleteGreeting.emit(event);
    }
}
