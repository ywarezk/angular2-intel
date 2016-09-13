/**
 * root module
 */

require('zone.js');
require('reflect-metadata/Reflect');

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component.ts';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';
import {GreetingComponent} from './greeting/greeting.component.ts';
import {TaskService} from './services/task.service.ts';
import {SingleTaskComponent} from './single-task/single-task.component.ts';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, GreetingComponent, SingleTaskComponent],
    bootstrap: [AppComponent],
    providers: [TaskService]
})
class AppModule{}


platformBrowserDynamic().bootstrapModule(AppModule);


