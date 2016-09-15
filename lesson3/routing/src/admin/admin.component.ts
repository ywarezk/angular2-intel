/**
 * Home Component
 */

import {Component} from '@angular/core';

@Component({
    selector: 'admin',
    template: `
    <h1> Hello admin page</h1>
    <nav>
        <ul>
            <li>
                <a [routerLink]="'/admin/user'">User</a>
            </li>
            <li>
                <a [routerLink]="'/admin/dashboard'">Dashboard</a>
            </li>
        </ul>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class AdminComponent{}
