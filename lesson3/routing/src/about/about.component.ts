/**
 * Home Component
 */

import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'about',
    template: `
    <h1> Hello about page</h1>
    `
})
export class AboutComponent{
    constructor(private _activatedRoute : ActivatedRoute){
        _activatedRoute.queryParams.subscribe((params) => {
            console.log('query params:');
            console.log(JSON.stringify(params));
        });
        _activatedRoute.params.subscribe((params) => {
            console.log('dynamic params:');
            console.log(JSON.stringify(params));
        });
    }
}
