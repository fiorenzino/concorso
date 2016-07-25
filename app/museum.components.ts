import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'museum',
    templateUrl: 'app/museum.component.html'
})
export class MuseumComponent implements OnInit {


    constructor(private router:Router) {
    }

    ngOnInit() {

    }

}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */