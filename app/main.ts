import {bootstrap}    from '@angular/platform-browser-dynamic';

import {AppComponent} from './app.component';
import {appRouterProviders} from './app.routes';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ArtistService} from "./artists/artist.service";
import {EditionService} from "./editions/edition.service";
import {WorkService} from "./works/work.service";
import {MenuHeaderComponent} from "./menu-header.component";

bootstrap(AppComponent, [
    appRouterProviders, ArtistService, EditionService, WorkService,
    {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }
]);
bootstrap(MenuHeaderComponent);


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */