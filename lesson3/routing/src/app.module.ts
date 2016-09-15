/**
 * root module
 */



import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';
import * as Root from './index.ts';
import {MyRoutingModule} from './app.routes.ts';

@NgModule({
    imports: [BrowserModule, FormsModule, MyRoutingModule],
    declarations: [
        Root.AppComponent,
        Root.HomeComponent,
        Root.AboutComponent,
        Root.AdminComponent,
        Root.UserComponent,
        Root.DashboardComponent
    ],
    bootstrap: [Root.AppComponent],
    providers: [Root.TaskService]
})
class AppModule{}


platformBrowserDynamic().bootstrapModule(AppModule);


