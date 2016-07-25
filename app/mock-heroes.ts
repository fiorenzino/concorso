import {Hero} from './hero';
import {Edition} from "./edition";
import {Artist} from "./artist";
import {Work} from "./work";

export var HEROES:Hero[] = [
    {id: 11, name: 'Mario Rossi', img: 'images/portfolio/vign1.jpg', bio: 'xxxx'},
    {id: 12, name: 'Narco', img: 'images/portfolio/vign2.jpg', bio: 'ccccc'},
    {id: 13, name: 'Bombasto', img: 'images/portfolio/vign3.jpg', bio: 'dddd'},
    {id: 14, name: 'Celeritas', img: 'images/portfolio/vign4.jpg', bio: 'sssss'},
    {id: 15, name: 'Magneta', img: 'images/portfolio/vign5.jpg', bio: 'aaaa'},
    {id: 16, name: 'RubberMan', img: 'images/portfolio/vign6.jpg', bio: 'qqqqqqq'},
    {id: 17, name: 'Dynama', img: 'images/portfolio/vign7.jpg', bio: 'qqqqqqqq'},
    {id: 18, name: 'Dr IQ', img: 'images/portfolio/vign8.jpg', bio: 'sssssss'},
    {id: 19, name: 'Magma', img: 'images/portfolio/vign9.jpg', bio: 'dddddd'},
    {id: 20, name: 'Tornado', img: 'images/portfolio/vign10.jpg', bio: 'zzzz'},
];


export var ARTISTS:Artist[] = [
    {id: 1, name: 'Mario Rossi', img: 'images/portfolio/vign1.jpg', bio: 'xxxx', works: [1]},
    {id: 2, name: 'Narco', img: 'images/portfolio/vign2.jpg', bio: 'ccccc', works: [2]},
    {id: 3, name: 'Bombasto', img: 'images/portfolio/vign3.jpg', bio: 'dddd', works: [3]},
    {id: 4, name: 'Celeritas', img: 'images/portfolio/vign4.jpg', bio: 'sssss', works: [1]},
    {id: 5, name: 'Magneta', img: 'images/portfolio/vign5.jpg', bio: 'aaaa', works: [2]},
    {id: 6, name: 'RubberMan', img: 'images/portfolio/vign6.jpg', bio: 'qqqqqqq', works: [2]},
    {id: 7, name: 'Dynama', img: 'images/portfolio/vign7.jpg', bio: 'qqqqqqqq', works: [3]},
    {id: 8, name: 'Dr IQ', img: 'images/portfolio/vign8.jpg', bio: 'sssssss', works: [1]},
    {id: 9, name: 'Magma', img: 'images/portfolio/vign9.jpg', bio: 'dddddd', works: [2]},
    {id: 10, name: 'Tornado', img: 'images/portfolio/vign10.jpg', bio: 'zzzz', works: [3]},
];

export var EDITIONS:Edition[] = [
    {id: 1, name: 'Edizione 2014', img: 'images/portfolio/vign1.jpg', description: 'edizione 2014', artists: [1,2,3]},
    {id: 2, name: 'Edizione 2015', img: 'images/portfolio/vign2.jpg', description: 'edizione 2015', artists: [4,5,6]},
    {id: 3, name: 'Edizione 2016', img: 'images/portfolio/vign3.jpg', description: 'edizione 2016', artists: [7,8,9]}
];

export var WORKS:Work[] = [
    {id: 1, name: 'La luna bussò', img: 'images/portfolio/vign1.jpg', description: 'premiata canzone in scultura', artist: 1},
    {id: 2, name: 'Non so chi sono', img: 'images/portfolio/vign2.jpg', description: 'crisi di identità', artist: 2},
    {id: 3, name: 'Puzzle', img: 'images/portfolio/vign3.jpg', description: 'da definire meglio', artist: 3}
];


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */