import { Component, OnInit, OnDestroy } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-album-details',
  template: `
  <section *ngIf="album">
    <h2>You selected: {{album.title}}</h2>
    <h3>Description</h3>
    <p>
       {{album.title}} released {{album.year}}
    </p>
  </section>

  <button (click)="gotoAlbumsList()">Back to albums list</button>
  `,
  styles: []
})
export class AlbumDetailsComponent implements OnInit{
  album: Album;
   sub: any;

  constructor(private albumService: AlbumService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.album = this.albumService.get(id);
    });
  }

  ngOnDestroy(){
      this.sub.unsubscribe();
  }

  gotoAlbumsList(){
    let link= ['/albums'];
    this.router.navigate(link);
  }
}
