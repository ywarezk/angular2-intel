/**
 * root module
 */



import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component.ts';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';
import {TaskService} from './services/task.service.ts';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [TaskService]
})
class AppModule{}


platformBrowserDynamic().bootstrapModule(AppModule);


