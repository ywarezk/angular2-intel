/**
 * root module
 */



import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';
import * as Root from './index.ts';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [
        Root.AppComponent,
    ],
    bootstrap: [Root.AppComponent],
    providers: [Root.TaskService]
})
class AppModule{}


platformBrowserDynamic().bootstrapModule(AppModule);


