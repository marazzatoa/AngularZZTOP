import { Injectable } from '@angular/core';
import { Album } from './album';

const ALBUM : Album[] = [
  {id: 1, title: "ZZ Tops First Album", year: 1971, label :"", imgUrl: "../assets/First_Album.jpg"},
  {id: 2, title: "Rio Grande Mud", year: 1972, label :"", imgUrl: "../assets/Rio_Grande_Mud.jpg"},
  {id: 3, title: "Tres Hombres", year:  1973, label :"", imgUrl: "../assets/Tres_Hombres.jpg"},
  {id: 4, title: "Fandango!", year: 1975, label :"", imgUrl: "../assets/Fandango.jpg"},
  {id: 5, title: "Tejas", year: 1976, label :"", imgUrl: "../assets/Tejas.jpg"},
  {id: 6, title: "Degüello", year: 1979, label :"", imgUrl: "../assets/Degüello.jpg"},
  {id: 7, title: "El Loco", year: 1981, label :"", imgUrl: "../assets/El_Loco.jpg"},
  {id: 8, title: "Eliminator ", year: 1983, label :"", imgUrl: "../assets/Eliminator.jpg"},
  {id: 9, title: "Afterburner",year: 1985, label :"", imgUrl: "../assets/Afterburner.jpg"},
  {id: 10, title: "Recycler", year: 1990, label :"", imgUrl: "../assets/Recycler.jpg"},
  {id: 11, title: "Antenna", year: 1994, label :"", imgUrl: "../assets/Antenna.jpg"},
  {id: 12, title: "Rhythmeen", year: 1996, label :"", imgUrl: "../assets/Rhythmeen.jpg"},
  {id: 13, title: "XXX", year: 1999, label :"", imgUrl: "../assets/XXX.jpg"},
  {id: 14, title: "Mescalero", year: 2003, label :"", imgUrl: "../assets/Mescalero.jpg"},
  {id: 15, title: "La Futura", year: 2012, label :"", imgUrl: "../assets/La_futura.jpg"}
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

  save(album: Album){
    let originalAlbum = ALBUM.find(p => p.id === album.id);
    if (originalAlbum) Object.assign(originalAlbum, album);
    // saved moahahaha
  }
  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }

}
