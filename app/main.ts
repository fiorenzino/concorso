import {bootstrap}    from '@angular/platform-browser-dynamic';

import {AppComponent} from './app.component';
import {appRouterProviders} from './app.routes';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ArtistService} from "./artist.service";
import {EditionService} from "./edition.service";
import {WorkService} from "./work.service";

bootstrap(AppComponent, [
    appRouterProviders, ArtistService, EditionService, WorkService,
    {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }
]);


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */