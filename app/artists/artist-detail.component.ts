import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ArtistService} from "./artist.service";
import {Artist} from "./artist";

@Component({
    selector: 'artist-detail',
    templateUrl: 'app/artists/artist-detail.component.html'
})
export class ArtistDetailComponent implements OnInit, OnDestroy {
    element:Artist;
    sub:any;

    constructor(private artistService:ArtistService,
                private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.artistService.getArtist(id)
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