import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Edition} from "./edition";
import {EditionService} from "./edition.service";

@Component({
    selector: 'editions',
    templateUrl: 'app/editions/editions.component.html'
})
export class EditionsComponent implements OnInit {
    list:Edition[];
    element:Edition;

    constructor(private router:Router,
                private editionService:EditionService) {
    }

    getList() {
        this.editionService.getEditions().then(list => this.list = list);
    }

    ngOnInit() {
        this.getList();
    }

    onSelect(element:Edition) {
        this.element = element;
    }

    gotoDetail() {
        this.router.navigate(['/edizioni', this.element.id]);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */