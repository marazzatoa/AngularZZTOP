import { Component, OnInit, OnDestroy } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styles: []
})
export class AlbumDetailsComponent implements OnInit{
  genres: string[] = ['Texas blues', 'blues rock', 'boogie rock', 'synthrock']
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

  saveAlbumDetails(){
       alert(`saved!!! ${JSON.stringify(this.album)}`);
       this.albumService.save(this.album);
  }


  gotoAlbumsList(){
    let link= ['/albums'];
    this.router.navigate(link);
  }
}
