/**
 * Root component
 */

import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: require('./app.template.html'),
    styles: [
        require('bootstrap/dist/css/bootstrap.css')
    ]
})
export class AppComponent{
    username : string = '';
    submmittingForm(){
        alert(this.username);
    }
}
