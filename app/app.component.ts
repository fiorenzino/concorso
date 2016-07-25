import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HeroService} from './heroes/hero.service';

@Component({
    selector: 'my-app',
    template: `
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})
export class AppComponent {}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */