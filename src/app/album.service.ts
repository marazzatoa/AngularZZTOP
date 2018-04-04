import { Injectable } from '@angular/core';
import { Album } from './album';

const ALBUM : Album[] = [
  {id: 1, title: "ZZ Tops First Album", year: 1971},
  {id: 2, title: "Rio Grande Mud ", year: 1972},
  {id: 3, title: "Tres Hombres ", year:  1973},
  {id: 4, title: "Fandango!", year: 1975},
  {id: 5, title: "Tejas", year: 1976},
  {id: 6, title: "Degüello", year: 1979},
  {id: 7, title: "El Loco ", year: 1981},
  {id: 8, title: "Eliminator ", year: 1983},
  {id: 9, title: "Afterburner",year: 1985},
  {id: 10, title: "Recycler", year: 1990},
  {id: 11, title: "Antenna", year: 1994},
  {id: 12, title: "Rhythmeen", year: 1996},
  {id: 13, title: "XXX", year: 1999},
  {id: 14, title: "Mescalero", year: 2003},
  {id: 15, title: "La Futura", year: 2012}
];


@Injectable()
export class AlbumService {

  constructor() { }

  getAll(): Album []{
    return ALBUM;
  }

  get(id: number) : Album {
    return ALBUM.find(p => p.id === id);
  }

}
