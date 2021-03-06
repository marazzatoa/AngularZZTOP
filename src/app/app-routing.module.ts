import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';

const routes: Routes = [
  // map '/albums' to the album list component
  {
    path: 'albums',
    component: AlbumListComponent,
  },
  {
    path: 'albums/:id',
    component: AlbumDetailsComponent
  },

  // map '/' to '/albums' as our default route
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
