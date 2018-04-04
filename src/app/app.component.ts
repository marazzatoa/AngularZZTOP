import { Component } from '@angular/core';
import { AlbumService} from './album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AlbumService]
})
export class AppComponent {
  title = 'ZZ Top discography';
}
