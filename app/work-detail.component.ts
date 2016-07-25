import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {WorkService} from "./work.service";
import {Work} from "./work";

@Component({
    selector: 'work-detail',
    templateUrl: 'app/work-detail.component.html'
})
export class WorkDetailComponent implements OnInit, OnDestroy {
    work:Work;
    sub:any;

    constructor(private workService:WorkService,
                private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.workService.getWork(id)
                .then(work => this.work = work);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        window.history.back();
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */