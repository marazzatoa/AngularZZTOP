import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumService} from './album.service';

import { appRouterModule } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
