import {EDITIONS} from "./edition-mock";
import {Injectable} from "@angular/core";
import {Edition} from "./edition";

@Injectable()
export class EditionService {

    constructor() {
        console.log('EditionService constructor');
    }


    getEditions() {
        return Promise.resolve(EDITIONS);
    }

    // See the "Take it slow" appendix
    getEditionSlowly() {
        return new Promise<Edition[]>(resolve =>
            setTimeout(() => resolve(EDITIONS), 2000) // 2 seconds
        );
    }

    getEdition(id:number) {
        return this.getEditions()
            .then(editions => editions.find(edition => edition.id === id));
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */