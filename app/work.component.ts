import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Work} from "./work";
import {WorkService} from "./work.service";

@Component({
    selector: 'work',
    templateUrl: 'app/work.component.html'
})
export class WorkComponent implements OnInit {
    works:Work[];
    element:Work;

    constructor(private router:Router,
                private workService:WorkService) {
    }

    getWorks() {
        this.workService.getWorks().then(works => this.works = works);
    }

    ngOnInit() {
        this.getWorks();
    }

    onSelect(work:Work) {
        this.element = work;
    }

    gotoDetail() {
        this.router.navigate(['/lavori', this.element.id]);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */