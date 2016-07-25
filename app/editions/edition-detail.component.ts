import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {EditionService} from "./edition.service";
import {Edition} from "./edition";

@Component({
    selector: 'edition-detail',
    templateUrl: 'app/editions/edition-detail.component.html'
})
export class EditionDetailComponent implements OnInit, OnDestroy {
    element:Edition;
    sub:any;

    constructor(private editionService:EditionService,
                private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.editionService.getEdition(id)
                .then(element => this.element = element);
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