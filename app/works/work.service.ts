import {WORKS} from "./work-mock";
import {Injectable} from "@angular/core";
import {Work} from "./work";

@Injectable()
export class WorkService {

    constructor() {
        console.log('WorkService constrcutor');
    }


    getWorks() {
        return Promise.resolve(WORKS);
    }

    // See the "Take it slow" appendix
    getWorksSlowly() {
        return new Promise<Work[]>(resolve =>
            setTimeout(() => resolve(WORKS), 2000) // 2 seconds
        );
    }

    getWork(id:number) {
        return this.getWorks()
            .then(works => works.find(work => work.id === id));
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */