///<reference path="work-detail.component.ts"/>
import {provideRouter, RouterConfig}  from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HomeComponent} from "./home.components";
import {ArtistDetailComponent} from "./artist-detail.component";
import {ArtistsComponent} from "./artists.component";
import {EditionDetailComponent} from "./edition-detail.component";
import {EditionsComponent} from "./editions.component";
import {MuseumComponent} from "./museum.components";
import {WhereComponent} from "./where.components";
import {ContactComponent} from "./contact.components";
import {WorkDetailComponent} from "./work-detail.component";

const routes:RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'edizioni/:id',
        component: EditionDetailComponent
    },
    {
        path: 'edizioni',
        component: EditionsComponent
    },
    {
        path: 'artisti/:id',
        component: ArtistDetailComponent
    },
    {
        path: 'artisti',
        component: ArtistsComponent
    },
    {
        path: 'lavori/:id',
        component: WorkDetailComponent
    },
    {
        path: 'lavori',
        component: WorkDetailComponent
    },
    {
        path: 'museo',
        component: MuseumComponent
    },
    {
        path: 'dove-siamo',
        component: WhereComponent
    },
    {
        path: 'contatti',
        component: ContactComponent
    },

];

export const appRouterProviders = [
    provideRouter(routes)
];


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */