import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Artist} from "./artist";
import {ArtistService} from "./artist.service";

@Component({
    selector: 'artists',
    templateUrl: 'app/artists.component.html'
})
export class ArtistsComponent implements OnInit {
    list:Artist[];
    element:Artist;

    constructor(private router:Router,
                private artistService:ArtistService) {
    }

    getList() {
        this.artistService.getArtists().then(list => this.list = list);
    }

    ngOnInit() {
        this.getList();
    }

    onSelect(element:Artist) {
        this.element = element;
    }

    gotoDetail() {
        this.router.navigate(['/artisti', this.element.id]);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */