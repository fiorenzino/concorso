///<reference path="works/work-detail.component.ts"/>
import {provideRouter, RouterConfig} from "@angular/router";
import {HomeComponent} from "./home/home.components";
import {ArtistDetailComponent} from "./artists/artist-detail.component";
import {ArtistsComponent} from "./artists/artists.component";
import {EditionDetailComponent} from "./editions/edition-detail.component";
import {EditionsComponent} from "./editions/editions.component";
import {MuseumComponent} from "./museum/museum.components";
import {WhereComponent} from "./where/where.components";
import {ContactComponent} from "./contact/contact.components";
import {WorkDetailComponent} from "./works/work-detail.component";

const routes:RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
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
    {
        path: '**',
        redirectTo: '/home'
    }

];

export const appRouterProviders = [
    provideRouter(routes)
];


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */