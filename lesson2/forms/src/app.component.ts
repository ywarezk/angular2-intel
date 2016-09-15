/**
 * Root component
 */

import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app',
    template: require('./app.template.html'),
    styles: [
        require('bootstrap/dist/css/bootstrap.css')
    ]
})
export class AppComponent{

    passwordControl : FormControl = new FormControl();
    repeatControl: FormControl = new FormControl();
    passwordForm : FormGroup;

    constructor(){
        this.passwordForm = new FormGroup({
            password: this.passwordControl,
            repeat: this.repeatControl
        }, (control) => {
            let firstValue = (<FormGroup>control).controls['password'].value;
            let secondValue = (<FormGroup>control).controls['repeat'].value;
            debugger;
            if(firstValue !== secondValue){
                return {'passwordNotMatch': 'the password does not match'}
            }
            return null;
        })
    }
    username : string = '1234';
}
