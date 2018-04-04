import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-list',
  template: `
  <div>
    <ul>
      <li *ngFor="let album of albums">
        <a [routerLink]="['/albums', album.id]">
          {{album.title}}
        </a>
      </li>
    </ul>
  </div>

  `,
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  albums: Album[];


  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albums = this.albumService.getAll();
  }


}
