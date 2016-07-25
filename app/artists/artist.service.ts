import {ARTISTS} from "./artist-mock";
import {Injectable} from "@angular/core";
import {Artist} from "./artist";

@Injectable()
export class ArtistService {

    constructor() {
        console.log('Artist constructor');
    }


    getArtists() {
        return Promise.resolve(ARTISTS);
    }

    // See the "Take it slow" appendix
    getArtistsSlowly() {
        return new Promise<Artist[]>(resolve =>
            setTimeout(() => resolve(ARTISTS), 2000) // 2 seconds
        );
    }

    getArtist(id:number) {
        return this.getArtists()
            .then(artists => artists.find(artist => artist.id === id));
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */