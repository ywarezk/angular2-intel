/**
 * root module routes
 */

import {Routes} from '@angular/router';
import * as Root from './index.ts';
import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const appRoutes : Routes = [
    {path: '', component: Root.HomeComponent, pathMatch: 'full' },
    {path: 'about', component: Root.AboutComponent, pathMatch: 'full' },
    {path: 'about/:id', component: Root.AboutComponent, pathMatch: 'full' },
];

export const MyRoutingModule : ModuleWithProviders = RouterModule.forRoot(appRoutes);


