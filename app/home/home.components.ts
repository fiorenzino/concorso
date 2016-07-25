import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Artist} from "../artists/artist";
import {Work} from "../works/work";
import {Edition} from "../editions/edition";
import {ArtistService} from "../artists/artist.service";
import {WorkService} from "../works/work.service";
import {EditionService} from "../editions/edition.service";

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html'
})
export class HomeComponent implements OnInit {

    artists:Artist[] = [];
    works:Work[] = [];
    editions:Edition[] = [];


    constructor(private router:Router,
                private artistService:ArtistService,
                private editionService:EditionService,
                private workService:WorkService
    ) {
    }

    ngOnInit() {
        this.artistService.getArtists()
            .then(artists => this.artists = artists);
        this.editionService.getEditions()
            .then(editions => this.editions = editions);
        this.workService.getWorks()
            .then(works => this.works = works);
    }

    viewArtist(artist:Artist) {
        let link = ['/artisti', artist.id];
        this.router.navigate(link);
    }
    viewEdition(edition:Edition) {
        let link = ['/edizioni', edition.id];
        this.router.navigate(link);
    }
    viewWork(work:Work) {
        let link = ['/detail', work.id];
        this.router.navigate(link);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */